import React, { useState, useEffect, useCallback, useMemo } from 'react';

export const useLab = () => {
  const [analyz, setAnalyz] = useState<string>('');
  const [card, setCard] = useState<string[]>([]);

  const taskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnalyz(e.target.value);
  };
};
