import { Terminal as XTerminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import { useEffect, useRef } from 'react';
import socket from './socket';

import '@xterm/xterm/css/xterm.css';

const WebConsole = () => {
  const terminalRef = useRef();
  const isRendered = useRef(false);

  useEffect(() => {
    if (isRendered.current) return;
    isRendered.current = true;

    const term = new XTerminal();
    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);

    term.open(terminalRef.current);
    fitAddon.fit();

    term.onData((data) => {
      socket.emit('terminal:write', data);
    });

    function onTerminalData(data) {
      term.write(data);
    }

    socket.on('terminal:data', onTerminalData);

    new ResizeObserver(() => term.loadAddon(fitAddon)).observe(
      terminalRef.current
    );
  }, []);

  return <div ref={terminalRef} id="terminal" style={{ height: '100vh' }} />;
};

export default WebConsole;
