window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('embed-iframe');
    const options = {
        width: '100%',
        height: '500',
        class: 'lazyload',
        uri: 'spotify:album:0ldTZ7gtbDR7x2Nxhm4E8z'
    };
    const callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
};