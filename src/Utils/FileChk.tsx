let MaybeDefault = (module) => {
    if (typeof module === "object") {

        module = module.default;
      }
    
      return module;
}

export default MaybeDefault;