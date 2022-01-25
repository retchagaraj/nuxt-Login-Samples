export const state = () => ({
    accessToken: ''
});

export const mutations = {
    accessToken: function (state, value) {
        console.log('session storage Token###:', value);
        state.accessToken = value;
    },
}