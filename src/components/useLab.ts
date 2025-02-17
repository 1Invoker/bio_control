import React, { useState, useEffect, useCallback, useMemo } from 'react';

const Lab = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  const taskInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
};
