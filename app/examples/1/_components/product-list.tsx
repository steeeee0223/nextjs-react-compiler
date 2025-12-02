import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { randomInt, randomItem } from '@/lib/utils';
import { toast } from 'sonner';

const categories = ['V', 'W', 'X', 'Y', 'Z'];
export function generateProducts(count: number): Product[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    category: randomItem(categories),
    price: randomInt(1, 20) * 50,
  }));
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex items-center gap-2 w-100 p-2 rounded-lg bg-neutral-200">
      <h3 className="font-medium mr-2">{product.name}</h3>
      <div className="rounded-sm px-1 h-6 text-base/6 bg-sky-500 text-primary-foreground">
        {product.category}
      </div>
      <span className="ml-auto">${product.price}</span>
    </div>
  );
}

interface ProductListProps {
  products: Product[];
  category: string;
}

export function ProductList({ products, category }: ProductListProps) {
  // Without React Compiler: Would need useMemo
  // With React Compiler: Automatically memoized
  const filteredProducts = products.filter((p) => p.category === category);

  const totalPrice = filteredProducts.reduce((sum, p) => sum + p.price, 0);

  toast.info(`[ProductList] Rendered ${category}`);
  return (
    <>
      <h2 className="font-semibold text-lg">Total: ${totalPrice}</h2>
      <div className="flex flex-col gap-2 max-h-120 overflow-auto ">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}

interface CategorySelectProps {
  cat: string;
  onSelect: (cat: string) => void;
}

export function CategorySelect({ cat, onSelect }: CategorySelectProps) {
  return (
    <Select value={cat} onValueChange={onSelect}>
      <SelectTrigger>
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              Category {category}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
