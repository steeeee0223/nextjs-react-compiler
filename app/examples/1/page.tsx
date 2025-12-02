'use client';

import { useState } from 'react';
import {
  CategorySelect,
  generateProducts,
  Product,
  ProductList,
} from './_components/product-list';
import { Button } from '@/components/ui/button';
import { ExampleInfo } from '@/components/example-info';

export const initialProducts: Product[] = generateProducts(100);

export default function Example1() {
  const [products] = useState(initialProducts);
  const [category, setCategory] = useState('X');
  const [unrelatedState, setUnrelatedState] = useState(0);

  return (
    <>
      <ExampleInfo
        title="Example 1"
        description="如果沒有 React Compilier，按下按鈕會導致 ProductList 重新渲染。使用 React Compiler 後，ProductList 不會重新渲染，因為它已經自動記憶化了。"
      />
      <div className="flex flex-col gap-4">
        <CategorySelect cat={category} onSelect={setCategory} />
        <ProductList products={products} category={category} />
        <Button
          variant="warn"
          onClick={() => setUnrelatedState((prev) => prev + 1)}
        >
          Trigger Unrelated Renders: {unrelatedState}
        </Button>
      </div>
    </>
  );
}
