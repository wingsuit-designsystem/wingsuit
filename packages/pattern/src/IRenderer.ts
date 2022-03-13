export default interface IRenderer {
  render(id: string, include: string, variables: {}): Promise<string>;
}
