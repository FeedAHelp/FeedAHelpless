import styled from "@emotion/styled";

const Splitter = styled.div`
  width: 100%;
  height: 34.375rem;
  display: flex;
`;

const First = styled.div`
  width: 20%;
  height: 100%;
  min-width: 0.625rem;
`;

const Separator = styled.div`
  cursor: col-resize;
  background-color: #fa792e;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='30pt' height='30pt' viewBox='0 0 300.000000 289.000000' preserveAspectRatio='xMidYMid meet'%3e%3cmetadata%3e Created by potrace 1.10, written by Peter Selinger 2001-2011 %3c/metadata%3e%3cg transform='translate(0.000000,289.000000) scale(0.100000,-0.100000)' fill='%23ffffff' stroke='none'%3e%3cpath d='M1365 2591 c-173 -49 -307 -184 -359 -360 -23 -78 -21 -213 4 -293 48 -156 171 -280 336 -339 86 -31 226 -31 316 0 171 58 309 205 347 371 15 66 13 187 -4 255 -45 172 -190 319 -363 366 -83 24 -196 23 -277 0z m249 -26 c171 -36 311 -172 357 -347 52 -196 -8 -376 -167 -506 -86 -70 -160 -96 -287 -99 -95 -2 -117 1 -175 23 -128 47 -224 134 -277 249 -35 77 -47 137 -44 224 6 218 152 397 369 455 71 19 138 19 224 1z'/%3e%3cpath d='M1307 2355 c-53 -18 -81 -47 -107 -108 -41 -95 -12 -205 81 -311 50 -56 178 -161 209 -171 48 -15 224 133 291 245 55 93 63 163 27 242 -29 63 -71 98 -128 105 -49 7 -123 -13 -146 -38 -22 -24 -36 -24 -59 1 -10 11 -41 27 -68 35 -60 18 -52 18 -100 0z m123 -44 c19 -10 44 -32 56 -48 l20 -30 16 27 c35 62 132 89 195 55 50 -27 88 -110 80 -176 -12 -95 -91 -202 -232 -310 l-61 -47 -84 69 c-146 118 -217 227 -208 317 13 133 114 199 218 143z'/%3e%3cpath d='M430 2219 c-29 -12 -67 -46 -82 -73 -15 -27 -107 -611 -101 -638 2 -13 50 -135 106 -272 l102 -249 190 -155 c104 -85 191 -163 193 -173 3 -15 -3 -19 -30 -19 -19 0 -39 -5 -46 -12 -8 -8 -12 -65 -12 -190 0 -165 1 -178 19 -188 13 -6 138 -10 340 -10 308 0 322 1 341 20 18 18 20 33 20 181 0 91 -4 169 -10 180 -8 14 -21 19 -55 19 l-45 0 0 83 c0 50 6 102 16 131 23 67 16 176 -16 241 -33 69 -132 165 -203 199 -43 20 -96 63 -206 170 -160 155 -203 181 -293 175 -33 -3 -43 0 -41 11 11 81 33 447 29 465 -9 35 -56 86 -93 101 -37 16 -87 17 -123 3z m154 -70 l28 -32 -6 -106 c-4 -58 -11 -158 -15 -221 -5 -63 -7 -123 -5 -135 5 -27 41 -55 70 -55 12 0 47 -5 76 -11 49 -11 62 -21 183 -139 150 -148 172 -166 240 -200 65 -32 137 -104 170 -170 22 -43 27 -67 27 -125 0 -40 -5 -82 -11 -94 -7 -11 -12 -64 -12 -118 0 -103 10 -128 56 -135 43 -7 45 -13 45 -162 0 -162 -2 -167 -68 -163 -41 2 -60 17 -22 17 10 0 28 10 40 22 17 19 20 35 20 123 0 149 18 140 -297 140 l-255 0 -19 -24 c-16 -19 -19 -40 -19 -119 0 -85 3 -98 22 -119 12 -13 30 -23 40 -23 38 0 16 -15 -27 -18 -35 -2 -46 2 -54 17 -11 19 -12 273 -2 289 3 5 19 15 35 23 44 21 54 44 36 77 -9 15 -94 91 -190 170 -201 164 -177 129 -317 472 l-75 185 11 70 c88 567 85 551 131 583 50 34 123 26 164 -19z m786 -1704 l0 -105 -262 0 -263 0 0 105 0 105 263 0 262 0 0 -105z m-310 -155 c0 -6 -32 -10 -75 -10 -43 0 -75 4 -75 10 0 6 32 10 75 10 43 0 75 -4 75 -10z m250 0 c0 -6 -27 -10 -60 -10 -33 0 -60 4 -60 10 0 6 27 10 60 10 33 0 60 -4 60 -10z'/%3e%3cpath d='M444 2158 c-25 -12 -50 -65 -58 -123 -8 -52 -14 -88 -26 -155 -24 -130 -50 -308 -50 -342 0 -33 22 -104 50 -163 5 -11 39 -92 75 -180 74 -183 60 -166 309 -370 108 -87 149 -127 153 -147 3 -15 16 -37 30 -50 23 -21 35 -23 150 -26 69 -2 140 -1 157 2 47 9 66 48 66 136 0 40 7 97 16 128 44 149 -33 296 -201 383 -43 23 -107 75 -201 164 -75 72 -148 138 -163 147 -35 24 -103 23 -124 0 -24 -27 -21 -45 19 -119 60 -111 99 -164 189 -258 52 -53 82 -91 74 -94 -20 -6 -200 187 -237 254 -34 62 -49 88 -96 167 -27 47 -28 50 -21 145 4 54 9 105 10 115 6 29 20 302 17 323 -1 11 -15 32 -29 47 -28 30 -69 36 -109 16z m86 -36 l23 -19 -21 -273 -21 -274 85 -150 c77 -135 98 -163 192 -258 108 -110 139 -127 170 -96 27 27 10 54 -92 158 -85 85 -117 127 -170 219 -37 63 -64 116 -62 119 3 2 26 1 52 -3 43 -6 58 -18 205 -157 115 -109 175 -158 216 -178 148 -70 221 -220 169 -345 -11 -25 -16 -68 -16 -131 l0 -94 -160 0 -160 0 0 35 c0 41 10 31 -231 228 l-172 142 -99 238 -98 237 45 280 c25 154 45 284 45 290 0 17 39 50 59 50 10 0 29 -8 41 -18z'/%3e%3cpath d='M2450 2219 c-37 -15 -78 -58 -90 -95 -8 -24 -7 -86 4 -236 9 -112 18 -215 20 -229 5 -26 4 -26 -38 -22 -27 4 -64 -1 -97 -12 -46 -16 -75 -38 -199 -160 -108 -106 -160 -149 -202 -169 -135 -64 -238 -207 -238 -331 0 -34 7 -84 15 -111 8 -27 15 -86 15 -131 l0 -83 -39 0 c-68 0 -71 -9 -71 -196 0 -151 2 -166 20 -184 19 -19 33 -20 341 -20 202 0 327 4 340 10 18 10 19 23 19 188 0 195 -2 202 -57 202 -25 0 -33 4 -32 18 0 10 77 79 186 167 102 83 191 159 198 170 17 25 200 471 209 507 6 26 -75 563 -95 624 -25 79 -128 125 -209 93z m137 -50 c8 -7 21 -25 29 -40 11 -23 54 -259 92 -509 16 -105 10 -129 -103 -395 -26 -60 -54 -129 -62 -152 -20 -56 -28 -64 -198 -203 -117 -95 -125 -102 -167 -139 -64 -56 -61 -97 9 -126 l33 -14 0 -144 c0 -107 -3 -147 -13 -155 -19 -16 -614 -12 -628 4 -5 7 -8 71 -7 154 l3 143 32 11 c54 18 67 39 71 115 3 44 -2 88 -12 124 -25 85 -21 173 9 236 34 70 106 140 180 176 55 27 214 166 293 258 38 43 102 76 165 83 34 4 68 15 84 27 24 19 25 24 19 91 -3 39 -10 131 -17 204 -10 125 -8 200 7 223 3 6 20 20 38 30 24 16 42 19 80 15 26 -3 55 -11 63 -17z'/%3e%3cpath d='M2456 2149 c-15 -12 -31 -31 -35 -43 -8 -22 0 -176 25 -473 6 -68 5 -75 -23 -120 -17 -26 -54 -91 -83 -143 -41 -72 -76 -118 -147 -188 -51 -52 -98 -92 -105 -89 -8 2 26 44 82 100 72 73 110 123 157 204 35 59 63 117 63 129 0 51 -85 72 -145 35 -16 -10 -90 -76 -164 -147 -94 -91 -152 -138 -196 -161 -72 -37 -155 -114 -187 -176 -17 -33 -22 -59 -22 -122 0 -44 5 -90 12 -102 7 -12 12 -60 12 -111 0 -82 2 -90 26 -113 25 -23 31 -24 174 -24 141 0 150 1 173 23 14 13 27 36 30 52 6 28 29 49 206 189 31 25 58 47 61 50 3 3 31 28 64 55 58 49 67 64 121 196 12 30 48 117 79 192 31 76 56 153 56 172 0 20 -11 104 -24 188 -14 84 -27 171 -31 193 -24 168 -32 193 -68 233 -26 28 -75 29 -111 1z m94 -29 c11 -11 20 -24 20 -29 0 -5 20 -136 45 -290 l45 -280 -98 -238 -99 -238 -172 -142 c-241 -197 -231 -187 -231 -228 l0 -35 -160 0 -160 0 0 94 c0 63 -5 106 -16 132 -11 26 -15 59 -12 105 3 58 9 75 42 122 37 55 117 118 166 133 14 4 95 74 181 155 85 81 168 153 183 159 26 9 86 14 86 6 0 -2 -30 -55 -66 -117 -53 -93 -85 -134 -172 -221 -100 -102 -106 -109 -96 -135 7 -20 17 -29 38 -31 25 -3 43 10 133 100 94 93 113 118 193 259 l89 155 -21 274 -21 273 23 19 c29 23 55 23 80 -2z'/%3e%3cpath d='M1650 583 c-44 -17 -50 -33 -50 -138 0 -152 -15 -145 292 -145 311 0 298 -6 298 144 0 149 16 141 -284 143 -132 1 -248 -1 -256 -4z m505 -138 l0 -105 -262 0 -263 0 0 105 0 105 263 0 262 0 0 -105z'/%3e%3c/g%3e%3c/svg%3e ");
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 1.5625rem 1.5625rem 4.6875rem rgba(0, 0, 0, 0.25),
    0.625rem 0.625rem 4.375rem rgba(0, 0, 0, 0.25),
    inset 0.3125rem 0.3125rem 0.625rem rgba(0, 0, 0, 0.5),
    inset 0.3125rem 0.3125rem 1.25rem rgba(255, 255, 255, 0.2),
    inset -0.3125rem -0.3125rem 0.9375rem rgba(0, 0, 0, 0.75);
  border-radius: 1.875rem;
  width: 3.125rem;
  height: 100%;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Second = styled.div`
  width: 80%;
  height: 100%;
  min-width: 0.625rem;
`;

export const Styled = {
  Splitter,
  First,
  Separator,
  Second,
};