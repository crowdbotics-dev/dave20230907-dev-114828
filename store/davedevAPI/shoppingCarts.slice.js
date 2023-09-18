import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_shoppingcart_list = createAsyncThunk(
  "shoppingCarts/api_v1_shoppingcart_list",
  async payload => {
    const response = await apiService.api_v1_shoppingcart_list(payload)
    return response.data
  }
)
export const api_v1_shoppingcart_create = createAsyncThunk(
  "shoppingCarts/api_v1_shoppingcart_create",
  async payload => {
    const response = await apiService.api_v1_shoppingcart_create(payload)
    return response.data
  }
)
export const api_v1_shoppingcart_retrieve = createAsyncThunk(
  "shoppingCarts/api_v1_shoppingcart_retrieve",
  async payload => {
    const response = await apiService.api_v1_shoppingcart_retrieve(payload)
    return response.data
  }
)
export const api_v1_shoppingcart_update = createAsyncThunk(
  "shoppingCarts/api_v1_shoppingcart_update",
  async payload => {
    const response = await apiService.api_v1_shoppingcart_update(payload)
    return response.data
  }
)
export const api_v1_shoppingcart_partial_update = createAsyncThunk(
  "shoppingCarts/api_v1_shoppingcart_partial_update",
  async payload => {
    const response = await apiService.api_v1_shoppingcart_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_shoppingcart_destroy = createAsyncThunk(
  "shoppingCarts/api_v1_shoppingcart_destroy",
  async payload => {
    const response = await apiService.api_v1_shoppingcart_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const shoppingCartsSlice = createSlice({
  name: "shoppingCarts",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_shoppingcart_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_shoppingcart_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_shoppingcart_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_shoppingcart_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_shoppingcart_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_shoppingcart_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_shoppingcart_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_shoppingcart_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_shoppingcart_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_shoppingcart_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_shoppingcart_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_shoppingcart_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_shoppingcart_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(
        api_v1_shoppingcart_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_shoppingcart_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_shoppingcart_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_shoppingcart_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_shoppingcart_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_shoppingcart_list,
  api_v1_shoppingcart_create,
  api_v1_shoppingcart_retrieve,
  api_v1_shoppingcart_update,
  api_v1_shoppingcart_partial_update,
  api_v1_shoppingcart_destroy,
  slice: shoppingCartsSlice
}
