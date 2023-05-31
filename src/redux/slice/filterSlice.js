import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_BY_SEARCH(state, action) {
      const { products, search } = action.payload;
      const tempProducts = products.filter(
        (product) =>
          product.description.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase())
      );

      state.filteredProducts = tempProducts;
    },
    SORT_PRODUCTS(state, action) {
      const { products, sort } = action.payload;
      let tempProducts = [];
      if (sort === "latest") {
        tempProducts = products;
      }
     
      if (sort === "lowest-price") {
        tempProducts = products.slice().sort((a, b) => {
          return a.price - b.price;
        });
      }

      if (sort === "highest-price") {
        tempProducts = products.slice().sort((a, b) => {
          return b.price - a.price;
        });
      }


      state.filteredProducts = tempProducts;
    },
    FILTER_BY_CATEGORY(state, action) {
      const { products, category } = action.payload;
      let tempProducts = [];
      if (category === "all") {
        tempProducts = products;
      } else {
        tempProducts = products.filter(
          (product) => product.category.includes(category)
        );
      }
      state.filteredProducts = tempProducts;
    },

    FILTER_BY_TAG(state, action) {
        const { products, tag } = action.payload;
        let tempProducts = [];
        if (tag === "all") {
          tempProducts = products;
        } else {
            tempProducts = products.filter(
                (product) => product.tag.includes(tag)
              
          );
        }
        state.filteredProducts = tempProducts;
      },
    
  
    
  },
});

export const {
    FILTER_BY_SEARCH,
  SORT_PRODUCTS,
  FILTER_BY_TAG,
  FILTER_BY_CATEGORY,
} = filterSlice.actions;

export const selectFilteredProducts = (state) => state.filter.filteredProducts;

export default filterSlice.reducer;