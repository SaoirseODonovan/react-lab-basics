import React from "react";
import CounterState from "../../components/samples/06_state";

export default {
  title: "Sample/06 stateful component"  ,
  component: CounterState,
};

export const Basic = () => {
    return <CounterState />   ;
};
Basic.storyName = 'default'

export const Normal = () => {
    return <CounterState jump={3}/>   ;
};
Normal.storyName = 'normal'


export const Exception = () => {
    return <CounterState jump={'high'}/>   ;
};
Normal.storyName = 'exceptional'
