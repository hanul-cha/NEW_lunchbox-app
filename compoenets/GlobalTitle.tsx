import Head from 'next/head';
import React from 'react';

interface GlobalTitlePropType {
  title:string
}

const GlobalTitle = ({title}:GlobalTitlePropType) => {
  return <Head><title>Hanul-Box | {title}</title></Head>;
};

export default GlobalTitle;
