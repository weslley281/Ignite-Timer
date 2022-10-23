import { HandPalm, Play } from 'phosphor-react';
import { useEffect, useState } from 'react';
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles';

import { differenceInSeconds } from 'date-fns';
import { NewCycleForm } from './components/NewCycleForm';
import { CountDown } from './components/CountDown';

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<String | null>(null);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function handleCreateNewCicle(data: newCircleFormData) {
    const id = String(new Date().getTime());

    const newCicle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    setCycles((state) => [...state, newCicle]);
    setActiveCycleId(id);
    setAmountSecondsPassed(0);

    reset();
  }

  function handledInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() };
        } else {
          return cycle;
        }
      })
    );

    setActiveCycleId(null);
  }

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60);
  const secondsAmount = currentSeconds % 60;

  const minutes = String(minutesAmount).padStart(2, '0');
  const seconds = String(secondsAmount).padStart(2, '0');

  useEffect(() => {
    if (activeCycle) document.title = `${minutes}:${seconds}`;
  }, [minutes, seconds, activeCycle]);

  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCicle)} action="">
        <NewCycleForm />
        <CountDown
          activeCycle={activeCycle}
          setCycles={setCycles}
          activeCycleId={activeCycleId}
        />

        {activeCycle ? (
          <StopCountdownButton onClick={handledInterruptCycle} type="button">
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
