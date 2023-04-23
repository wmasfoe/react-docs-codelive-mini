import CodeBlock from './CodeBlock';
import Sandpack from './Sandpack';



export const MDXComponents = {
  pre: CodeBlock,
  Sandpack,
};

for (let key in MDXComponents) {
  if (MDXComponents.hasOwnProperty(key)) {
    const MDXComponent: any = (MDXComponents as any)[key];
    MDXComponent.mdxName = key;
  }
}
