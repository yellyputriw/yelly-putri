class Project {
  /**
   * Add new project.
   * @param {string} image
   * @param {string} title
   * @param {string} description
   * @param {string} link
   * @returns
   */
  static add(
    image,
    title,
    description,
    link = '#'
  ) {
    return {
      image,
      title,
      description,
      link,
    };
  }
}

export default Project;
