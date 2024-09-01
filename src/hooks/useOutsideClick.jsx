"use client";

/* eslint-disable no-undef */
import { useEffect, useRef } from "react";

//HOW TO USE
// /*
//   1) import this hook into the component you want to use it in.
//   2) define something like....
//       const [ref] = useOutsideClick(() => "an action you want to perform. can be a function too");

//       NOTE: "ref can be any viable string too"

//   3) pass * ref={ref} * to the element you want to use it on

//   @callmeoani
// */

/**
 *
 * @param {*} callback
 * @returns void
 *  1) import this hook into the component you want to use it in.
 *  2) const [ref] = useOutsideClick(() => "an action you want to perform. can be a function too"); NOTE: "ref can be any viable string too"
 * 3) pass * ref={ref} * to the element you want to use it on
 * @callmeoani
 */
export function useOutsideClick(callback) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback(ref, event);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return [ref];
}
