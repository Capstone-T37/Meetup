import io, { Socket } from 'socket.io-client';

class SocketService {
    private socket: Socket | null = null;
    private listeners: Record<string, (...args: any[]) => void> = {};

    public connect = (url: string): void => {
        this.socket = io(url);
        this.socket.on('connect', () => {
            console.log('Socket connected');
        });
        this.socket.on('disconnect', () => {
            console.log('Socket disconnected');
        });
    };

    public on = (eventName: string, callback: (...args: any[]) => void): void => {
        if (this.socket) {
            this.socket.on(eventName, callback);
            this.listeners[eventName] = callback;
        }
    };

    public off = (eventName: string): void => {
        if (this.socket && this.listeners[eventName]) {
            this.socket.off(eventName, this.listeners[eventName]);
            delete this.listeners[eventName];
        }
    };

    public emit = (eventName: string, data: any): void => {
        if (this.socket) {
            this.socket.emit(eventName, data);
        }
    };

    public disconnect = (): void => {
        if (this.socket) {
            this.socket.disconnect();
            this.socket = null;
            this.listeners = {};
        }
    };
}

export default new SocketService();
