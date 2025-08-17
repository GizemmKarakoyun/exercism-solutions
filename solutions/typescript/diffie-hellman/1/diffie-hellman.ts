function isPrime(n: number): boolean {
    for (let i = 2; i < n / 2; i++) {
        if (n % i === 0) {
            return false
        }
    }

    return true
}

export class DiffieHellman {
    constructor(private p: number, private g: number) {
        if (!isPrime(p) || !isPrime(g)) {
            throw Error()
        }
    }

    public getPublicKey(privateKey: number): number {
        if (privateKey < 2 || privateKey >= this.p) {
            throw Error()
        }

        return (this.g ** privateKey) % this.p
    }

    public getSecret(theirPublicKey: number, myPrivateKey: number): number {
        return (theirPublicKey ** myPrivateKey) % this.p
    }
}