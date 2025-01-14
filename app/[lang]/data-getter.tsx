"use client"

// Public imports
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/app/hooks";
import {  DataGetterProps } from "@/types/types";
//* Redux actions
import { setSiteData, setSiteConfig} from "@/redux/features/person-data/person-slice";


const DataGetter = ({ personData }: DataGetterProps) => {
  // Hooks
  const dispatch = useAppDispatch()
  const persionData=useAppSelector(state=>state.person.personData)
  useEffect(() => {
    if (personData) {
      dispatch(setSiteData(personData.siteData));
      dispatch(setSiteConfig(personData.siteConfig));
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
  },[personData]);

  if (persionData) {
    return null;
  } else {
    return <p>loading</p>;
  }
};
export default DataGetter;
