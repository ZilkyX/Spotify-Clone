import { Song } from "../models/song.model.js";
import { User } from "../models/user.model.js";
import { Album } from "../models/album.model.js";

export const getAllStats = async (req, res, next) => {
  try {
    const [totalSongs, totalAlbums, totalUsers] = await Promise.all([
      Song.countDocuments(),
      Album.countDocuments(),
      User.countDocuments(),
    ]);

    
  } catch (error) {
    console.log("Error in getAllStats.", error);
    next(error);
  }
};
