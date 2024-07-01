const buildOptions = (endpoint, parsedBody) => {
  const {
    chatGptLabel,
    promptPrefix,
    maxContextTokens,
    cvEnhancement,
    resendFiles,
    imageDetail,
    iconURL,
    greeting,
    spec,
    ...rest
  } = parsedBody;
  const endpointOption = {
    endpoint,
    chatGptLabel,
    promptPrefix,
    cvEnhancement,
    resendFiles,
    imageDetail,
    iconURL,
    greeting,
    spec,
    maxContextTokens,
    modelOptions: {
      ...rest,
    },
  };

  return endpointOption;
};

module.exports = buildOptions;
