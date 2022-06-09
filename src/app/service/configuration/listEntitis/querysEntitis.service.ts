import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class QueryEntitisService {
  constructor() { }

  queryDefault(): object {
    return { $limit: 10, $skip: 0 };
  }

  queryValueActive(value: any, active: any, limit: number, skip: number): any {
    if (value && active == null) {
      return {
        $text: { $search: value },
        $limit: limit,
        $skip: skip,
      };
    } else if (!value && (active == false || active == true)) {
      return {
        active,
        $limit: limit,
        $skip: skip,
      };
    } else if (value && (active == false || active == true)) {
      return {
        $text: { $search: value },
        active,
        $limit: limit,
        $skip: skip,
      };
    } else {
      return { $limit: limit, $skip: skip };
    }
  }

  queryValueVerifiedActive(
    value: any,
    isVerified: any,
    active: any,
    limit: number,
    skip: number
  ): any {
    if (value && active == null && isVerified == null) {
      return {
        $text: { $search: value },
        $limit: limit,
        $skip: skip,
      };
    } else if (
      !value &&
      (active == false || active == true) &&
      isVerified == null
    ) {
      return {
        active,
        $limit: limit,
        $skip: skip,
      };
    } else if (
      !value &&
      active == null &&
      (isVerified == false || isVerified == true)
    ) {
      return {
        isVerified,
        $limit: limit,
        $skip: skip,
      };
    } else if (
      value &&
      (active == false || active == true) &&
      isVerified == null
    ) {
      return {
        $text: { $search: value },
        active,
        $limit: limit,
        $skip: skip,
      };
    } else if (
      value &&
      active == null &&
      (isVerified == false || isVerified == true)
    ) {
      return {
        $text: { $search: value },
        isVerified,
        $limit: limit,
        $skip: skip,
      };
    } else if (
      !value &&
      (active == false || active == true) &&
      (isVerified == false || isVerified == true)
    ) {
      return {
        isVerified,
        active,
        $limit: limit,
        $skip: skip,
      };
    } else if (
      value &&
      (active == false || active == true) &&
      (isVerified == false || isVerified == true)
    ) {
      return {
        $text: { $search: value },
        isVerified,
        active,
        $limit: limit,
        $skip: skip,
      };
    } else {
      return { $limit: limit, $skip: skip };
    }
  }

  queryFNS(
    value: any,
    year: any,
    active: any,
    limit: number,
    skip: number
  ): any {
    if (value && !active && !year) {
      return {
        $text: { $search: value },
        $limit: limit,
        $skip: skip,
      };
    } else if (!value && (active == false || active == true) && !year) {
      return {
        active,
        $limit: limit,
        $skip: skip,
      };
    } else if (!value && !active && year) {
      return {
        year,
        $limit: limit,
        $skip: skip,
      };
    } else if (value && active && !year) {
      return {
        $text: { $search: value },
        active,
        $limit: limit,
        $skip: skip,
      };
    } else if (value && !active && year) {
      return {
        $text: { $search: value },
        year,
        $limit: limit,
        $skip: skip,
      };
    } else if (!value && active && year) {
      return {
        year,
        active,
        $limit: limit,
        $skip: skip,
      };
    } else if (value && active && year) {
      return {
        $text: { $search: value },
        year,
        active,
        $limit: limit,
        $skip: skip,
      };
    } else {
      return { $limit: limit, $skip: skip };
    }
  }
}
