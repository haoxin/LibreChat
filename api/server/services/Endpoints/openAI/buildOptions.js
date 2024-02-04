const buildOptions = (endpoint, parsedBody) => {
  const { chatGptLabel, promptPrefix, cvEnhancement, resendImages, imageDetail, ...rest } =
    parsedBody;
  const endpointOption = {
    endpoint,
    chatGptLabel,
    promptPrefix,
    resendImages,
    cvEnhancement,
    imageDetail,
    modelOptions: {
      ...rest,
    },
  };

  return endpointOption;
};

module.exports = buildOptions;
