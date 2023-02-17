import { useEffect, useState } from 'react'
import type { PublicClient } from 'viem'
import type { OnBlockNumberResponse } from 'viem/public'
import { watchBlockNumber } from 'viem/public'

export function WatchBlockNumber({ client }: { client: PublicClient }) {
  const [blockNumber, setBlockNumber] = useState<OnBlockNumberResponse>()
  useEffect(() => {
    const unwatch = watchBlockNumber(client, {
      emitOnBegin: true,
      onBlockNumber: setBlockNumber,
    })
    return unwatch
  }, [client])
  return <div>{blockNumber?.toString()}</div>
}