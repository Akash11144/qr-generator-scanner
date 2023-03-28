import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

// ///////////////////////////////

export default function QRScanner() {
  const [data, setData] = useState(null);
  const [scanning, setScanning] = useState(false);

  return (
    <div
      style={{ backgroundColor: "yellowgreen" }}
      className="d-flex flex-column justify-content-center align-items-center gap-2 m-2 p-3 rounded-3"
    >
      <p>updated at : 28/3/2023 6:55PM</p>
      <h1 className="text-decoration-underline">QRScanner</h1>
      <div>
        <button
          className="btn btn-dark text-capitalize text-light"
          onClick={() =>
            setScanning((cur) => {
              if (cur) {
                window.location.reload(true);
              } else {
                return true;
              }
            })
          }
        >
          {scanning ? "stop scan" : "start scan"}
        </button>
        <div className="w-100">
          {scanning && (
            <>
              <QrReader
                onResult={(result, error) => {
                  console.log("eeeee", result, error);
                  if (!!result) {
                    setData(result?.text);
                    setScanning(false);
                  }

                  if (!!error) {
                    console.info(error);
                  }
                }}
                constraints={{ facingMode: "back" }}
                scanDelay={1000}
              />
            </>
          )}
        </div>
      </div>
      <p>{data}</p>
    </div>
  );
}
