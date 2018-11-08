import * as types from "./types";
import { fetch } from "../../utils";
import { PUT, createNotification, DELETE, getUserUrl } from "@utilities";

import { getSkillsAttr, getUserApiType, convertImage } from "./utils";
import { getAllUrlParams } from "@views/utils/functions";
import { clearPromptNextLocation } from "../modals/actions";

export const updateProfile = payload => ({
  type: types.UPDATE_PROFILE,
  payload
});

// Step 1 - user Profile info
export const updateInfoFetch = async (values, dispatch, props) => {
  const { city, country, ...data } = values;
  const {
    userId: user_id,
    userType,
    educations: education = [],
    work_experiences: experience = []
  } = props;

  const image = data["person"] && data["person"][0];
  const url = getUserUrl(userType);
  const apiType = getUserApiType(userType);

  const educations_attributes = education.filter(e => !e.id);
  const work_experiences_attributes = experience.filter(e => !e.id);
  let avatar;

  if (image) {
    avatar = await convertImage(image);
  }

  return fetch(PUT, `/${url}/${user_id}`, {
    [apiType]: {
      ...data,
      avatar,
      educations_attributes,
      work_experiences_attributes,
      address_attributes: {
        city,
        country,
        user_id
      }
    }
  });
};

// Education cards
export const addEducationCard = payload => ({
  type: types.EDUCATION_CARD_ADD,
  payload
});

export const editEducationCard = payload => (dispatch, getState) => {
  const user_id = getState().user.id;

  if (payload.id) {
    return fetch(PUT, `/specialists/${user_id}/educations/${payload.id}`, {
      education: {
        ...payload
      }
    }).then(({ data }) => {
      dispatch({
        type: types.EDUCATION_CARDS_UPDATE,
        payload: data
      });
    });
  } else {
    dispatch({
      type: types.EDUCATION_CARD_EDIT,
      payload
    });
  }
};

export const deleteEducationCard = payload => (dispatch, getState) => {
  const user_id = getState().user.id;

  if (payload.id) {
    return fetch(
      DELETE,
      `/specialists/${user_id}/educations/${payload.id}`
    ).then(({ data }) => {
      dispatch({
        type: types.EDUCATION_CARDS_UPDATE,
        payload: data
      });
    });
  } else {
    dispatch({
      type: types.EDUCATION_CARD_DELETE,
      payload
    });
  }
};

// Experience cards
export const addWorkExperienceCard = payload => ({
  type: types.EXPERIENCE_CARD_ADD,
  payload
});

/**
 * Edit work experience data card
 *
 * @param  {object} data card data
 * @param  {number} id card id
 */

export const editWorkExperienceCard = payload => (dispatch, getState) => {
  const user_id = getState().user.id;

  if (payload.id) {
    const data = {
      work_experience: {
        ...payload
      }
    };

    return fetch(
      PUT,
      `/specialists/${user_id}/experiences/${payload.id}`,
      data
    ).then(({ data }) => {
      dispatch({
        type: types.EXPERIENCE_CARD_UPDATE,
        payload: data
      });
    });
  } else {
    dispatch({
      type: types.EXPERIENCE_CARD_EDIT,
      payload
    });
  }
};

/**
 * Delete experience card
 *
 * @param  {object} payload card data
 */

export const deleteExperienceCard = payload => (dispatch, getState) => {
  const user_id = getState().user.id;

  if (payload.id) {
    return fetch(
      DELETE,
      `/specialists/${user_id}/experiences/${payload.id}`
    ).then(({ data }) => {
      dispatch({
        type: types.EXPERIENCE_CARD_UPDATE,
        payload: data
      });
    });
  } else {
    dispatch({
      type: types.EXPERIENCE_CARD_DELETE,
      payload
    });
  }
};

// Step 1.2 - Specialist industry
export const updateIndustryFetch = (values, dispatch, props) => {
  return fetch(PUT, `/specialists/${props.userId}`, {
    specialist: {
      ...values,
      project_type_id: values.project_type,
      specialist_skills_attributes: {
        skill_attributes: getSkillsAttr(values)
      },
      speciality_ids: getSkillsAttr(values) || ""
    }
  });
};

export const updateCompanyFetch = (values, dispatch, props) => {
  const { userId: user_id, userType } = props;
  const url = getUserUrl(userType);
  const apiType = getUserApiType(userType);

  return fetch(PUT, `/${url}/${user_id}`, {
    [apiType]: {
      company_attributes: {
        ...values,
        user_id
      }
    }
  });
};

export const updateBillingsFetch = (values, dispatch, props) => {
  const { userId: user_id, userType } = props;
  const url = getUserUrl(userType);
  const apiType = getUserApiType(userType);

  return fetch(PUT, `/${url}/${user_id}`, {
    [apiType]: {
      billing_attributes: {
        ...values,
        user_type: apiType,
        user_id
      }
    }
  });
};

export const updateProfileSuccess = (submitResult, dispatch, props) => {
  const { step, routes, nextLocation } = props;
  const isEditing = getAllUrlParams().edit || null;

  dispatch(updateProfile(submitResult.data));

  if (
    !isEditing &&
    (!localStorage.lastProfileStep || !localStorage.lastProfileStep < step)
  )
    localStorage.setItem("lastProfileStep", step);

  props.history.push(
    nextLocation ||
      (isEditing || step === routes.length
        ? "/dashboard/about"
        : routes[step].path)
  );

  dispatch(clearPromptNextLocation());

  createNotification({
    type: "success",
    text: "Changes was saved"
  });
};

export const updateProfileFail = (error, dispatch, submitError, props) => {
  console.error(submitError);
  if (error) props.showSubmitErrorModal();
  createNotification({
    type: "error"
  });
};
