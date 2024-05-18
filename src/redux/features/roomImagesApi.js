import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  addDoc,
  collection,
  deleteDoc,
  getDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../../firebase/config";

const roomImagesApiApi = createApi({
  reducerPath: "roomImagesApiApi",
  baseQuery: fetchBaseQuery(),
  tagTypes: ["roomImagesApi"],
  endpoints: (builder) => ({
    fetchroomImagesApi: builder.query({
      queryFn: async () => {
        try {
          const roomImagesApiRef = collection(db, "roomImagesApi");
          const querySnapshot = await getDocs(roomImagesApiRef);
          const listroomImagesApi = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          return { data: listroomImagesApi };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["roomImagesApi"],
    }),
    fetchroomImageApi: builder.query({
      queryFn: async (id) => {
        try {
          const roomImageApiRef = doc(db, "roomImagesApi", id);
          const snapshot = await getDoc(roomImageApiRef);
          return { data: snapshot.data() };
        } catch (error) {
          return { error };
        }
      },
      providesTags: ["roomImagesApi"],
    }),

    addroomImageApi: builder.mutation({
      queryFn: async (roomImageApi) => {
        try {
          await addDoc(collection(db, "roomImagesApi"), {
            ...roomImageApi,
            timestamp: new Date().toISOString(),
          });
          return { data: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["roomImagesApi"],
    }),
    updateroomImageApi: builder.mutation({
      queryFn: async ({ id, roomImageApi }) => {
        try {
          await updateDoc(doc(db, "roomImagesApi", id), {
            ...roomImageApi,
            timestamp: new Date().toISOString(),
          });
          return { data: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["roomImagesApi"],
    }),
    deleteroomImageApi: builder.mutation({
      queryFn: async (id) => {
        try {
          await deleteDoc(doc(db, "roomImagesApi", id));
          return { status: "ok" };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["roomImagesApi"],
    }),
  }),
});

export const {
  useFetchroomImageApiQuery,
  useFetchroomImagesApiQuery,
  useAddroomImageApiMutation,
  useDeleteroomImageApiMutation,
  useUpdateroomImageApiMutation,
} = roomImagesApiApi;
export default roomImagesApiApi;
