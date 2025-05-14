"use client";

import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import Model from './Model';

const AddTask = () => {
  const [modelOpen, setModelOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        className='btn btn-primary w-full'
        onClick={() => setModelOpen(true)}
      >
        ADD NEW TASK <FaPlus className='ml-2' size={18} />
      </button>
      <Model modelOpen={modelOpen} />
    </div>
  );
};

export default AddTask;
