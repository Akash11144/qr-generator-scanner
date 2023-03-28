import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

// ///////////////////////////////////////////

export default function QRGenerator() {
  const [qrData, setQrData] = useState("");

  const downloadQR = () => {
    const canvas = document.getElementById("canvaqr");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "canvaqr.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    setQrData("");
  };

  return (
    <div
      style={{ backgroundColor: "yellowgreen" }}
      className="d-flex flex-column justify-content-center align-items-center gap-2 m-2 p-3 rounded-3"
    >
      <h1 className="text-decoration-underline">QR Generator</h1>
      <div>
        <input
          className="form-control"
          type={"text"}
          value={qrData}
          placeholder={"Enter Data"}
          onChange={(e) => setQrData(e.target.value)}
        />
      </div>
      {qrData && (
        <>
          <div>
            <QRCodeCanvas id="canvaqr" value={qrData} includeMargin={true} />
            {/* <QRCodeSVG
              id="svgqr"
              value={qrData}
              includeMargin={true}
              height={600}
              width={600}
            /> */}
          </div>
          <div>
            <button className="btn btn-light" onClick={downloadQR}>
              Download QR
            </button>
          </div>
        </>
      )}
    </div>
  );
}
