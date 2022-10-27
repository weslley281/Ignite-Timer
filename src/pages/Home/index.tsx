import { HandPalm, Play } from 'phosphor-react';
import { createContext, useContext, useEffect, useState } from 'react';
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles';

import { NewCycleForm } from './components/NewCycleForm';
import { CountDown } from './components/CountDown';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { CyclesContext } from '../../contexts/CyclesContext';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
});

// converte o newCircleFormValidationSchema em uma interface
type newCircleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);
  const newCycleForm = useForm<newCircleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: { task: '', minutesAmount: 0 },
  });
  const { handleSubmit, watch, reset } = newCycleForm;
  const task = watch('task');
  const isSubmitDisabled = !task;

  function handleCreateNewCycle(data: newCircleFormData) {
    createNewCycle(data);
    reset();
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <CountDown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} /> Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} /> Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
