import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

// ///////////////////////////////

export default function QRScanner() {
  const [data, setData] = useState("Scan to get Data");
  const [scanning, setScanning] = useState(false);

  return (
    <div
      style={{ backgroundColor: "yellowgreen" }}
      className="d-flex flex-column justify-content-center align-items-center gap-2 m-2 p-3 rounded-3"
    >
      <p>updated at : 28/3/2023 7:02PM</p>
      <h1 className="text-decoration-underline">QRScanner</h1>
      <p className="bg-white p-2 rounded-1">{data}</p>
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
      </div>
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
  );
}
