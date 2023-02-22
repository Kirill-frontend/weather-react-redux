import React from 'react';
import { useState, useEffect } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeDegrees } from '../store/slicers/switchSlicer';
import { DEGREES, FARENGEIT } from './../utils/types';

export const Switch = () => {
  const dispatch = useDispatch()
  const [radioValue, setRadioValue] = useState(DEGREES);

  const radios = [
    { name: 'C\u00b0', value: DEGREES },
    { name: 'F\u00b0', value: FARENGEIT }
  ];

  useEffect(() => {
    dispatch(changeDegrees())
  }, [radioValue])

  return (
    <>
      <ButtonGroup className="mb-2" style={{position: 'relative'}}>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="transparent"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            style={radioValue === radio.value ? {fontWeight: 700} : {fontWeight: 300}}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <div className="vertical-line"></div>
    </>
  )
};
