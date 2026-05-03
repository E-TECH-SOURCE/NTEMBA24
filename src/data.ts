export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    images: string[];
    isNew?: boolean;
    stock: number;
    rating: number;
    reviews: number;
    description: string;
}

export const PRODUCTS: Product[] = [
    {
        id: "p1",
        name: "N-24 Essential Heavyweight Hoodie",
        price: 120,
        category: "Hoodies",
        images: [
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800"
        ],
        isNew: true,
        stock: 3,
        rating: 4.8,
        reviews: 124,
        description: "Crafted from 500gsm French Terry cotton, the N-24 Essential Hoodie offers a relaxed, dropped-shoulder fit. Features distinct minimalistic branding and a structured hood that holds its shape. A true staple for modern streetwear."
    },
    {
        id: "p2",
        name: "Utility Cargo Trousers",
        price: 145,
        category: "Bottoms",
        images: [
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800"
        ],
        stock: 12,
        rating: 4.6,
        reviews: 89,
        description: "Tactical everyday wear. These utility cargos are constructed from an ultra-durable ripstop fabric blend, featuring adjustable ankle draws and 6 functional pockets perfectly positioned for urban mobility."
    },
    {
        id: "p3",
        name: "Oversized Mock-Neck Tee",
        price: 55,
        category: "T-Shirts",
        images: [
            "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800"
        ],
        stock: 5,
        rating: 4.9,
        reviews: 210,
        description: "The perfect drape. This oversized tee features a thick mock-neck collar and slightly elongated sleeves for a contemporary silhouette. Garment-dyed for a rich, lasting color."
    },
    {
        id: "p4",
        name: "Vegan Leather Aviator Jacket",
        price: 280,
        category: "Outerwear",
        images: [
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800"
        ],
        isNew: true,
        stock: 2,
        rating: 5.0,
        reviews: 42,
        description: "A cruelty-free luxury statement piece. The Aviator features premium synthetic leather, heavy-duty silver hardware, and a subtle cropped fit designed to layer effortlessly."
    }
];
