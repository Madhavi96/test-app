module.exports = {
  // ... (other configurations)
  webpack: (config, env) => {
    console.log('> webpack_stage\n');
    // Your custom webpack here
    config.output.filename = `static/js/[name].v_1.0_[hash].js`;
    config.output.chunkFilename = `static/js/[name].v_1.0_[contenthash].chunk.js`;
    return config;
  },
};
