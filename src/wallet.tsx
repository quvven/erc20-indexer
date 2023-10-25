import React, { useState } from 'react'

export default function useWallet() {
    const [address, setAddress] = useState(null);

    const connect = async () => {
        const res = await globalThis.ethereum.enable();

        console.log("Connected Account: ", res);

        res && res.length > 0 && setAddress(res[0]);
        
        return res[0];
    }

    return [address, connect];
}
