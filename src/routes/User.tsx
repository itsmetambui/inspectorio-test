import * as React from 'react';
import { useParams } from "react-router-dom";

export default function User() {
  const params = useParams();
  return <h1>Invoice {params.username}</h1>;

  
}
