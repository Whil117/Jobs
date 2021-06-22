import React, { useState, useEffect } from "react";

interface Date {
  id: number;
  job: string;
  company: {
    logo: string;
    name: string;
  };
  descript: {
    ago: string;
    time: string;
    only: string;
  };
  tags: {
    id: Array<string>;
  };
  mode: {
    new: string;
    feat: string;
  };
}

const MyUseFetch = (url: string) => {
  const [jobs, setJobs] = useState<Date[]>([]);

  const myFetch = async (url: string) => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setJobs(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    myFetch(url);
  }, [url]);

  return jobs;
};

export default MyUseFetch;
