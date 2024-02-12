module.exports = {
  // ... (other configurations)
  webpack: (config, env) => {
    console.log('> webpack_stage\n');
    // Your custom webpack here
    config.output.filename = `static/js/[name].v_1.1_[hash].js`;
    config.output.chunkFilename = `static/js/[name].v_1.1_[contenthash].chunk.js`;
    return config;
  },
};
