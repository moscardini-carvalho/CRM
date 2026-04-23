const state = {
    leads: []
};

const listeners = [];

export function getState() {
    return state;
}

export function setState(newState) {
    Object.assign(state, newState);
    notify();
}

export function subscribe(listener) {
    listeners.push(listener);
}

function notify() {
    listeners.forEach(listener => listener(state));
}