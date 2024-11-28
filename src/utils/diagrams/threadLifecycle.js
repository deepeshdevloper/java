export const threadLifecycleDiagram = `
stateDiagram-v2
    [*] --> NEW: Thread created
    NEW --> RUNNABLE: start()
    RUNNABLE --> BLOCKED: waiting for monitor lock
    RUNNABLE --> WAITING: wait()/join()
    RUNNABLE --> TIMED_WAITING: sleep(n)/wait(n)
    BLOCKED --> RUNNABLE: lock acquired
    WAITING --> RUNNABLE: notify()/notifyAll()
    TIMED_WAITING --> RUNNABLE: timeout/interrupt
    RUNNABLE --> TERMINATED: run() completes
    TERMINATED --> [*]

    state RUNNABLE {
        [*] --> Ready: Thread scheduled
        Ready --> Running: Gets CPU
        Running --> Ready: yield()/preempted
        Running --> [*]: Task complete
    }

    note right of NEW: Thread object created
    note right of RUNNABLE: Thread is executing or ready
    note right of BLOCKED: Waiting for monitor lock
    note right of WAITING: Waiting indefinitely
    note right of TIMED_WAITING: Waiting with timeout
    note right of TERMINATED: Thread has completed
`;