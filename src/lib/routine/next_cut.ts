export const nextCut = (
    extEnc: {
        getMeterValue: () => never;
    },
    relayBank: {
        relayWrite: (arg0: number, arg1: number) => void;
    },
    socket: {
        emit: (arg0: string, arg1: boolean) => void;
    }) => {
        try {

            let running = true;

            process.on('SIGTERM', () => {
                running = false;
            });

            const _enc_test = async () => {
                while (running) {
                    console.log("Meter value:", extEnc.getMeterValue());
                    await new Promise(resolve => setTimeout(resolve, 1000));
                }
            };

            console.log('Sawmill: preforming Next Cut sequence...')

            // get current meter value
            const current_meter_value = Number(extEnc.getMeterValue());
            relayBank.relayWrite(0, 1);

            // while current_meter_value <=current_meter_value + 600
            while (Number(extEnc.getMeterValue()) < current_meter_value + 600) {
                _enc_test();
            }

            relayBank.relayWrite(0, 0);
            relayBank.relayWrite(1, 1);

            console.log('Sawmill: ...completed Next Cut sequence')
            socket.emit('nextCutBtn', false);
        } catch (error) {
            console.error("An error with nextCutBtn i2c block", error);
    } finally {
        console.log("Continuing...");
    }
}