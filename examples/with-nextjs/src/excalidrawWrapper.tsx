"use client";
import * as excalidrawLib from "@jitsi/excalidraw";
import { Excalidraw } from "@jitsi/excalidraw";
import App from "../../with-script-in-browser/components/ExampleApp";

import "@jitsi/excalidraw/index.css";

const ExcalidrawWrapper: React.FC = () => {
  return (
    <>
      <App
        appTitle={"Excalidraw with Nextjs Example"}
        useCustom={(api: any, args?: any[]) => {}}
        excalidrawLib={excalidrawLib}
      >
        <Excalidraw />
      </App>
    </>
  );
};

export default ExcalidrawWrapper;
