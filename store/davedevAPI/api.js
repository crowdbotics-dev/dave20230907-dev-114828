import axios from "axios";
const davedevAPI = axios.create({
  baseURL: "https://dave20230907-dev-114828.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function api_docs_schema_retrieve(payload) {
  return davedevAPI.get(`/api-docs/schema/`, {
    params: {
      lang: payload.lang
    }
  });
}

function api_v1_login_create(payload) {
  return davedevAPI.post(`/api/v1/login/`, payload);
}

function api_v1_shoppingcart_list(payload) {
  return davedevAPI.get(`/api/v1/shoppingcart/`);
}

function api_v1_shoppingcart_create(payload) {
  return davedevAPI.post(`/api/v1/shoppingcart/`, payload);
}

function api_v1_shoppingcart_retrieve(payload) {
  return davedevAPI.get(`/api/v1/shoppingcart/${payload.id}/`);
}

function api_v1_shoppingcart_update(payload) {
  return davedevAPI.put(`/api/v1/shoppingcart/${payload.id}/`, payload);
}

function api_v1_shoppingcart_partial_update(payload) {
  return davedevAPI.patch(`/api/v1/shoppingcart/${payload.id}/`, payload);
}

function api_v1_shoppingcart_destroy(payload) {
  return davedevAPI.delete(`/api/v1/shoppingcart/${payload.id}/`);
}

function api_v1_signup_create(payload) {
  return davedevAPI.post(`/api/v1/signup/`, payload);
}

function rest_auth_login_create(payload) {
  return davedevAPI.post(`/rest-auth/login/`, payload);
}

function rest_auth_logout_retrieve(payload) {
  return davedevAPI.get(`/rest-auth/logout/`);
}

function rest_auth_logout_create(payload) {
  return davedevAPI.post(`/rest-auth/logout/`);
}

function rest_auth_password_change_create(payload) {
  return davedevAPI.post(`/rest-auth/password/change/`, payload);
}

function rest_auth_password_reset_create(payload) {
  return davedevAPI.post(`/rest-auth/password/reset/`, payload);
}

function rest_auth_password_reset_confirm_create(payload) {
  return davedevAPI.post(`/rest-auth/password/reset/confirm/`, payload);
}

function rest_auth_registration_create(payload) {
  return davedevAPI.post(`/rest-auth/registration/`, payload);
}

function rest_auth_registration_verify_email_create(payload) {
  return davedevAPI.post(`/rest-auth/registration/verify-email/`, payload);
}

function rest_auth_user_retrieve(payload) {
  return davedevAPI.get(`/rest-auth/user/`);
}

function rest_auth_user_update(payload) {
  return davedevAPI.put(`/rest-auth/user/`, payload);
}

function rest_auth_user_partial_update(payload) {
  return davedevAPI.patch(`/rest-auth/user/`, payload);
}

export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_shoppingcart_list,
  api_v1_shoppingcart_create,
  api_v1_shoppingcart_retrieve,
  api_v1_shoppingcart_update,
  api_v1_shoppingcart_partial_update,
  api_v1_shoppingcart_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
};