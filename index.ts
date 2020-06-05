function steeper(path: PropertyKey[], first: boolean = false) {
    const branches: PropertyKey[][] = []
    const proxy = new Proxy({}, {
        has(target: {}, p: PropertyKey): boolean {
            return true
        },
        get(target: {}, p: PropertyKey, receiver: any): any {
            if (first) {
                path = branches[branches.length] = []
            }

            path.push(p)
            return steeper(path).proxy
        }
    })

    return {
        branches,
        path,
        proxy
    };
}

export function group<T, A extends string, B>(handler: (ctx: T) => [A, B]) {
    const stp = steeper([], true)
    handler(stp.proxy as any)
    console.log(stp.branches)
    return (acc: Record<A, B>, item: T, index: number) => {
        return acc;
    }
}