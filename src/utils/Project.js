class Project {
  /**
   * Add new project.
   * @param {string} image
   * @param {string} title
   * @param {string} description
   * @param {string} link
   * @param {string} fade
   * @returns
   */
  static add(
    image,
    title,
    description,
    link = '#',
    fade
  ) {
    return {
      image,
      title,
      description,
      link,
      fade,
    };
  }
}

export default Project;
