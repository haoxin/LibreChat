const buildOptions = (endpoint, parsedBody) => {
  const { chatGptLabel, promptPrefix, cvEnhancement, resendFiles, imageDetail, ...rest } =
    parsedBody;
  const endpointOption = {
    endpoint,
    chatGptLabel,
    promptPrefix,
    cvEnhancement,
    resendFiles,
    imageDetail,
    modelOptions: {
      ...rest,
    },
  };

  return endpointOption;
};

module.exports = buildOptions;
