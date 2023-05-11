'use client';

import { useMemo } from 'react';

import clsx from 'clsx';

export type OtpInputProps = {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  otpLenght?: 4 | 6;
};

const RE_DIGIT = /^\d+$/;

export const OtpInput = ({ value, onChange, otpLenght = 4 }: OtpInputProps) => {
  const valueItems = useMemo(() => {
    const valueArray = value.split('');
    return new Array(otpLenght).fill('').map((_, index) => {
      const char = valueArray[index];
      if (RE_DIGIT.test(char)) {
        return char;
      }
      return '';
    });
  }, [value, otpLenght]);

  const setFocusOnValidateOtpButton = () => {
    setTimeout(() => {
      document.getElementById('validate-otp')?.focus();
    }, 10);
  };

  const focusToNextInput = (target: HTMLElement) => {
    const nextElementSibling =
      target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) nextElementSibling.focus();
    else setFocusOnValidateOtpButton();
  };

  const focusToPrevInput = (target: HTMLElement) => {
    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;
    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const target = e.target;
    let targetValue = target.value.trim();
    const isTargetValueDigit = RE_DIGIT.test(targetValue);

    if (!isTargetValueDigit && targetValue !== '') {
      return;
    }

    const nextInputEl = target.nextElementSibling as HTMLInputElement | null;
    if (!isTargetValueDigit && nextInputEl && nextInputEl.value !== '') {
      return;
    }

    targetValue = isTargetValueDigit ? targetValue : ' ';
    const targetValueLength = targetValue.length;

    if (targetValueLength === 1) {
      const newValue =
        value.substring(0, index) + targetValue + value.substring(index + 1);
      onChange(newValue);
      if (!isTargetValueDigit) {
        return;
      }
      focusToNextInput(target);
    } else if (targetValueLength === otpLenght) {
      onChange(targetValue);
      target.blur();
      setFocusOnValidateOtpButton();
    }
  };

  const inputOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const target = e.target as HTMLInputElement;

    if (key === 'ArrowRight' || key === 'ArrowDown') {
      e.preventDefault();
      return focusToNextInput(target);
    }

    if (key === 'ArrowLeft' || key === 'ArrowUp') {
      e.preventDefault();
      return focusToPrevInput(target);
    }

    const targetValue = target.value;
    target.setSelectionRange(0, targetValue.length);
    if (key !== 'Backspace' || target.value !== '') {
      return null;
    }
    return focusToPrevInput(target);
  };

  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e;
    const prevInputEl =
      target.previousElementSibling as HTMLInputElement | null;

    if (prevInputEl && prevInputEl.value === '') {
      return prevInputEl.focus();
    }

    return target.setSelectionRange(0, target.value.length);
  };

  return (
    <div>
      <fieldset
        className={clsx('flex items-center justify-center gap-2 border-none', {
          "order-1 h-1 min-w-[16px] bg-gray-300 after:content-['']":
            otpLenght === 6,
        })}
      >
        {valueItems.map((digit, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern="\d{1}"
            maxLength={otpLenght}
            onChange={e => inputOnChange(e, index)}
            onKeyDown={inputOnKeyDown}
            onFocus={inputOnFocus}
            value={digit}
            className="relative h-16 w-16 rounded-lg border border-solid border-gray-300 bg-transparent text-center font-inter text-3xl font-medium text-primary"
          />
        ))}
      </fieldset>
    </div>
  );
};
