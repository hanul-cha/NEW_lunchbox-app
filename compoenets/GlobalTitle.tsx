import Head from 'next/head';
import React from 'react';

interface GlobalTitlePropType {

}

const GlobalTitle = ({title}:any) => {
  return <Head><title>Hanul-Box | {title}</title></Head>;
};

export default GlobalTitle;
