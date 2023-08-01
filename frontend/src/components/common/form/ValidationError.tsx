import { useEffect, useState } from "react";

interface Props {
  errors: any;
}

export default function ValidationError({ errors }: Props) {
  const [errorVar, setErrorVar] = useState<any>([]);

  useEffect(() => {
    if (Object.values(errors["response"]["data"]).length == 0) {
      console.log(Object.values(errors["response"])[1]);
      setErrorVar(Object.values(errors["response"])[1]);
      return;
    }
    setErrorVar(Object.values(errors["response"]["data"]));
  }, [errors]);
  return (
    <ul>
      {Object.values(errors["response"]["data"]).length == 0 ? (
        <li className="text-red-500 text-center">{errorVar}</li>
      ) : (
        errorVar.map((err: any, i: any) => (
          <li className="text-red-500 text-center" key={i}>
            {err["message"]}
          </li>
        ))
      )}
    </ul>
  );
}
