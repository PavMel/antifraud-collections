var canvas = document.createElement('canvas');
gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

var ACTIVE_TEXTURE = gl.ACTIVE_TEXTURE;
var ALIASED_LINE_WIDTH_RANGE = gl.ALIASED_LINE_WIDTH_RANGE;
var ALIASED_POINT_SIZE_RANGE = gl.ALIASED_POINT_SIZE_RANGE;
var ALPHA_BITS = gl.ALPHA_BITS;
var ARRAY_BUFFER_BINDING = gl.ARRAY_BUFFER_BINDING;
var BLEND = gl.BLEND;
var BLEND_COLOR = gl.BLEND_COLOR;
var BLEND_DST_ALPHA = gl.BLEND_DST_ALPHA;
var BLEND_DST_RGB = gl.BLEND_DST_RGB;
var BLEND_EQUATION = gl.BLEND_EQUATION;
var BLEND_EQUATION_ALPHA = gl.BLEND_EQUATION_ALPHA;
var BLEND_EQUATION_RGB = gl.BLEND_EQUATION_RGB;
var BLEND_SRC_ALPHA = gl.BLEND_SRC_ALPHA;
var BLEND_SRC_RGB = gl.BLEND_SRC_RGB;
var BLUE_BITS = gl.BLUE_BITS;
var COLOR_CLEAR_VALUE = gl.COLOR_CLEAR_VALUE;
var COLOR_WRITEMASK = gl.COLOR_WRITEMASK;
var COMPRESSED_TEXTURE_FORMATS = gl.COMPRESSED_TEXTURE_FORMATS;
var CULL_FACE = gl.CULL_FACE;
var CULL_FACE_MODE = gl.CULL_FACE_MODE;
var CURRENT_PROGRAM = gl.CURRENT_PROGRAM;
var DEPTH_BITS = gl.DEPTH_BITS;
var DEPTH_CLEAR_VALUE = gl.DEPTH_CLEAR_VALUE;
var DEPTH_FUNC = gl.DEPTH_FUNC;
var DEPTH_RANGE = gl.DEPTH_RANGE;
var DEPTH_TEST = gl.DEPTH_TEST;
var DEPTH_WRITEMASK = gl.DEPTH_WRITEMASK;
var DITHER = gl.DITHER;
var ELEMENT_ARRAY_BUFFER_BINDING = gl.ELEMENT_ARRAY_BUFFER_BINDING;
var FRAMEBUFFER_BINDING = gl.FRAMEBUFFER_BINDING;
var FRONT_FACE = gl.FRONT_FACE;
var GENERATE_MIPMAP_HINT = gl.GENERATE_MIPMAP_HINT;
var GREEN_BITS = gl.GREEN_BITS;
var IMPLEMENTATION_COLOR_READ_FORMAT = gl.IMPLEMENTATION_COLOR_READ_FORMAT;
var IMPLEMENTATION_COLOR_READ_TYPE = gl.IMPLEMENTATION_COLOR_READ_TYPE;
var LINE_WIDTH = gl.LINE_WIDTH;
var MAX_COMBINED_TEXTURE_IMAGE_UNITS = gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS;
var MAX_CUBE_MAP_TEXTURE_SIZE = gl.MAX_CUBE_MAP_TEXTURE_SIZE;
var MAX_FRAGMENT_UNIFORM_VECTORS = gl.MAX_FRAGMENT_UNIFORM_VECTORS;
var MAX_RENDERBUFFER_SIZE = gl.MAX_RENDERBUFFER_SIZE;
var MAX_TEXTURE_IMAGE_UNITS = gl.MAX_TEXTURE_IMAGE_UNITS;
var MAX_TEXTURE_SIZE = gl.MAX_TEXTURE_SIZE;
var MAX_VARYING_VECTORS = gl.MAX_VARYING_VECTORS;
var MAX_VERTEX_ATTRIBS = gl.MAX_VERTEX_ATTRIBS;
var MAX_VERTEX_TEXTURE_IMAGE_UNITS = gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS;
var MAX_VERTEX_UNIFORM_VECTORS = gl.MAX_VERTEX_UNIFORM_VECTORS;
var MAX_VIEWPORT_DIMS = gl.MAX_VIEWPORT_DIMS;
var PACK_ALIGNMENT = gl.PACK_ALIGNMENT;
var POLYGON_OFFSET_FACTOR = gl.POLYGON_OFFSET_FACTOR;
var POLYGON_OFFSET_FILL = gl.POLYGON_OFFSET_FILL;
var POLYGON_OFFSET_UNITS = gl.POLYGON_OFFSET_UNITS;
var RED_BITS = gl.RED_BITS;
var RENDERBUFFER_BINDING = gl.RENDERBUFFER_BINDING;
var RENDERER = gl.RENDERER;
var SAMPLE_BUFFERS = gl.SAMPLE_BUFFERS;
var SAMPLE_COVERAGE_INVERT = gl.SAMPLE_COVERAGE_INVERT;
var SAMPLE_COVERAGE_VALUE = gl.SAMPLE_COVERAGE_VALUE;
var SAMPLES = gl.SAMPLES;
var SCISSOR_BOX = gl.SCISSOR_BOX;
var SCISSOR_TEST = gl.SCISSOR_TEST;
var SHADING_LANGUAGE_VERSION = gl.SHADING_LANGUAGE_VERSION;
var STENCIL_BACK_FAIL = gl.STENCIL_BACK_FAIL;
var STENCIL_BACK_FUNC = gl.STENCIL_BACK_FUNC;
var STENCIL_BACK_PASS_DEPTH_FAIL = gl.STENCIL_BACK_PASS_DEPTH_FAIL;
var STENCIL_BACK_PASS_DEPTH_PASS = gl.STENCIL_BACK_PASS_DEPTH_PASS;
var STENCIL_BACK_REF = gl.STENCIL_BACK_REF;
var STENCIL_BACK_VALUE_MASK = gl.STENCIL_BACK_VALUE_MASK;
var STENCIL_BACK_WRITEMASK = gl.STENCIL_BACK_WRITEMASK;
var STENCIL_BITS = gl.STENCIL_BITS;
var STENCIL_CLEAR_VALUE = gl.STENCIL_CLEAR_VALUE;
var STENCIL_FAIL = gl.STENCIL_FAIL;
var STENCIL_FUNC = gl.STENCIL_FUNC;
var STENCIL_PASS_DEPTH_FAIL = gl.STENCIL_PASS_DEPTH_FAIL;
var STENCIL_PASS_DEPTH_PASS = gl.STENCIL_PASS_DEPTH_PASS;
var STENCIL_REF = gl.STENCIL_REF;
var STENCIL_TEST = gl.STENCIL_TEST;
var STENCIL_VALUE_MASK = gl.STENCIL_VALUE_MASK;
var STENCIL_WRITEMASK = gl.STENCIL_WRITEMASK;
var SUBPIXEL_BITS = gl.SUBPIXEL_BITS;
var TEXTURE_BINDING_2D = gl.TEXTURE_BINDING_2D;
var TEXTURE_BINDING_CUBE_MAP = gl.TEXTURE_BINDING_CUBE_MAP;
var UNPACK_ALIGNMENT = gl.UNPACK_ALIGNMENT;
var UNPACK_COLORSPACE_CONVERSION_WEBGL = gl.UNPACK_COLORSPACE_CONVERSION_WEBGL;
var UNPACK_FLIP_Y_WEBGL = gl.UNPACK_FLIP_Y_WEBGL;
var UNPACK_PREMULTIPLY_ALPHA_WEBGL = gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL;
var VENDOR = gl.VENDOR;
var VERSION = gl.VERSION;
var VIEWPORT = gl.VIEWPORT;
var ext_UNMASKED_VENDOR_WEBGL = gl.getExtension('WEBGL_debug_renderer_info').UNMASKED_VENDOR_WEBGL;
var ext_UNMASKED_RENDERER_WEBGL = gl.getExtension('WEBGL_debug_renderer_info').UNMASKED_RENDERER_WEBGL;
var ext_MAX_DRAW_BUFFERS_WEBGL =  gl.getExtension('WEBGL_draw_buffers').MAX_DRAW_BUFFERS_WEBGL;

var WebGlGetParametr = {};

WebGlGetParametr.ACTIVE_TEXTURE = {};
WebGlGetParametr.ACTIVE_TEXTURE.int = ACTIVE_TEXTURE;
WebGlGetParametr.ACTIVE_TEXTURE.data = gl.getParameter(ACTIVE_TEXTURE);
WebGlGetParametr.ACTIVE_TEXTURE.datatype = typeof gl.getParameter(ACTIVE_TEXTURE);

WebGlGetParametr.ALIASED_LINE_WIDTH_RANGE = {};
WebGlGetParametr.ALIASED_LINE_WIDTH_RANGE.int = ALIASED_LINE_WIDTH_RANGE;
WebGlGetParametr.ALIASED_LINE_WIDTH_RANGE.data = gl.getParameter(ALIASED_LINE_WIDTH_RANGE);
WebGlGetParametr.ALIASED_LINE_WIDTH_RANGE.datatype = typeof gl.getParameter(ALIASED_LINE_WIDTH_RANGE);

WebGlGetParametr.ALIASED_POINT_SIZE_RANGE = {};
WebGlGetParametr.ALIASED_POINT_SIZE_RANGE.int = ALIASED_POINT_SIZE_RANGE;
WebGlGetParametr.ALIASED_POINT_SIZE_RANGE.data = gl.getParameter(ALIASED_POINT_SIZE_RANGE);
WebGlGetParametr.ALIASED_POINT_SIZE_RANGE.datatype = typeof gl.getParameter(ALIASED_POINT_SIZE_RANGE);

WebGlGetParametr.ALPHA_BITS = {};
WebGlGetParametr.ALPHA_BITS.int = ALPHA_BITS;
WebGlGetParametr.ALPHA_BITS.data = gl.getParameter(ALPHA_BITS);
WebGlGetParametr.ALPHA_BITS.datatype = typeof gl.getParameter(ALPHA_BITS);

WebGlGetParametr.ARRAY_BUFFER_BINDING = {};
WebGlGetParametr.ARRAY_BUFFER_BINDING.int = ARRAY_BUFFER_BINDING;
WebGlGetParametr.ARRAY_BUFFER_BINDING.data = gl.getParameter(ARRAY_BUFFER_BINDING);
WebGlGetParametr.ARRAY_BUFFER_BINDING.datatype = typeof gl.getParameter(ARRAY_BUFFER_BINDING);

WebGlGetParametr.BLEND = {};
WebGlGetParametr.BLEND.int = BLEND;
WebGlGetParametr.BLEND.data = gl.getParameter(BLEND);
WebGlGetParametr.BLEND.datatype = typeof gl.getParameter(BLEND);

WebGlGetParametr.BLEND_COLOR = {};
WebGlGetParametr.BLEND_COLOR.int = BLEND_COLOR;
WebGlGetParametr.BLEND_COLOR.data = gl.getParameter(BLEND_COLOR);
WebGlGetParametr.BLEND_COLOR.datatype = typeof gl.getParameter(BLEND_COLOR);

WebGlGetParametr.BLEND_DST_ALPHA = {};
WebGlGetParametr.BLEND_DST_ALPHA.int = BLEND_DST_ALPHA;
WebGlGetParametr.BLEND_DST_ALPHA.data = gl.getParameter(BLEND_DST_ALPHA);
WebGlGetParametr.BLEND_DST_ALPHA.datatype = typeof gl.getParameter(BLEND_DST_ALPHA);

WebGlGetParametr.BLEND_DST_RGB = {};
WebGlGetParametr.BLEND_DST_RGB.int = BLEND_DST_RGB;
WebGlGetParametr.BLEND_DST_RGB.data = gl.getParameter(BLEND_DST_RGB);
WebGlGetParametr.BLEND_DST_RGB.datatype = typeof gl.getParameter(BLEND_DST_RGB);

WebGlGetParametr.BLEND_EQUATION = {};
WebGlGetParametr.BLEND_EQUATION.int = BLEND_EQUATION;
WebGlGetParametr.BLEND_EQUATION.data = gl.getParameter(BLEND_EQUATION);
WebGlGetParametr.BLEND_EQUATION.datatype = typeof gl.getParameter(BLEND_EQUATION);

WebGlGetParametr.BLEND_EQUATION_ALPHA = {};
WebGlGetParametr.BLEND_EQUATION_ALPHA.int = BLEND_EQUATION_ALPHA;
WebGlGetParametr.BLEND_EQUATION_ALPHA.data = gl.getParameter(BLEND_EQUATION_ALPHA);
WebGlGetParametr.BLEND_EQUATION_ALPHA.datatype = typeof gl.getParameter(BLEND_EQUATION_ALPHA);

WebGlGetParametr.BLEND_EQUATION_RGB = {};
WebGlGetParametr.BLEND_EQUATION_RGB.int = BLEND_EQUATION_RGB;
WebGlGetParametr.BLEND_EQUATION_RGB.data = gl.getParameter(BLEND_EQUATION_RGB);
WebGlGetParametr.BLEND_EQUATION_RGB.datatype = typeof gl.getParameter(BLEND_EQUATION_RGB);

WebGlGetParametr.BLEND_SRC_ALPHA = {};
WebGlGetParametr.BLEND_SRC_ALPHA.int = BLEND_SRC_ALPHA;
WebGlGetParametr.BLEND_SRC_ALPHA.data = gl.getParameter(BLEND_SRC_ALPHA);
WebGlGetParametr.BLEND_SRC_ALPHA.datatype = typeof gl.getParameter(BLEND_SRC_ALPHA);

WebGlGetParametr.BLEND_SRC_RGB = {};
WebGlGetParametr.BLEND_SRC_RGB.int = BLEND_SRC_RGB;
WebGlGetParametr.BLEND_SRC_RGB.data = gl.getParameter(BLEND_SRC_RGB);
WebGlGetParametr.BLEND_SRC_RGB.datatype = typeof gl.getParameter(BLEND_SRC_RGB);

WebGlGetParametr.BLUE_BITS = {};
WebGlGetParametr.BLUE_BITS.int = BLUE_BITS;
WebGlGetParametr.BLUE_BITS.data = gl.getParameter(BLUE_BITS);
WebGlGetParametr.BLUE_BITS.datatype = typeof gl.getParameter(BLUE_BITS);

WebGlGetParametr.COLOR_CLEAR_VALUE = {};
WebGlGetParametr.COLOR_CLEAR_VALUE.int = COLOR_CLEAR_VALUE;
WebGlGetParametr.COLOR_CLEAR_VALUE.data = gl.getParameter(COLOR_CLEAR_VALUE);
WebGlGetParametr.COLOR_CLEAR_VALUE.datatype = typeof gl.getParameter(COLOR_CLEAR_VALUE);

WebGlGetParametr.COLOR_WRITEMASK = {};
WebGlGetParametr.COLOR_WRITEMASK.int = COLOR_WRITEMASK;
WebGlGetParametr.COLOR_WRITEMASK.data = gl.getParameter(COLOR_WRITEMASK);
WebGlGetParametr.COLOR_WRITEMASK.datatype = typeof gl.getParameter(COLOR_WRITEMASK);

WebGlGetParametr.COMPRESSED_TEXTURE_FORMATS = {};
WebGlGetParametr.COMPRESSED_TEXTURE_FORMATS.int = COMPRESSED_TEXTURE_FORMATS;
WebGlGetParametr.COMPRESSED_TEXTURE_FORMATS.data = gl.getParameter(COMPRESSED_TEXTURE_FORMATS);
WebGlGetParametr.COMPRESSED_TEXTURE_FORMATS.datatype = typeof gl.getParameter(COMPRESSED_TEXTURE_FORMATS);

WebGlGetParametr.CULL_FACE = {};
WebGlGetParametr.CULL_FACE.int = CULL_FACE;
WebGlGetParametr.CULL_FACE.data = gl.getParameter(CULL_FACE);
WebGlGetParametr.CULL_FACE.datatype = typeof gl.getParameter(CULL_FACE);

WebGlGetParametr.CULL_FACE_MODE = {};
WebGlGetParametr.CULL_FACE_MODE.int = CULL_FACE_MODE;
WebGlGetParametr.CULL_FACE_MODE.data = gl.getParameter(CULL_FACE_MODE);
WebGlGetParametr.CULL_FACE_MODE.datatype = typeof gl.getParameter(CULL_FACE_MODE);

WebGlGetParametr.CURRENT_PROGRAM = {};
WebGlGetParametr.CURRENT_PROGRAM.int = CURRENT_PROGRAM;
WebGlGetParametr.CURRENT_PROGRAM.data = gl.getParameter(CURRENT_PROGRAM);
WebGlGetParametr.CURRENT_PROGRAM.datatype = typeof gl.getParameter(CURRENT_PROGRAM);

WebGlGetParametr.DEPTH_BITS = {};
WebGlGetParametr.DEPTH_BITS.int = DEPTH_BITS;
WebGlGetParametr.DEPTH_BITS.data = gl.getParameter(DEPTH_BITS);
WebGlGetParametr.DEPTH_BITS.datatype = typeof gl.getParameter(DEPTH_BITS);

WebGlGetParametr.DEPTH_CLEAR_VALUE = {};
WebGlGetParametr.DEPTH_CLEAR_VALUE.int = DEPTH_CLEAR_VALUE;
WebGlGetParametr.DEPTH_CLEAR_VALUE.data = gl.getParameter(DEPTH_CLEAR_VALUE);
WebGlGetParametr.DEPTH_CLEAR_VALUE.datatype = typeof gl.getParameter(DEPTH_CLEAR_VALUE);

WebGlGetParametr.DEPTH_FUNC = {};
WebGlGetParametr.DEPTH_FUNC.int = DEPTH_FUNC;
WebGlGetParametr.DEPTH_FUNC.data = gl.getParameter(DEPTH_FUNC);
WebGlGetParametr.DEPTH_FUNC.datatype = typeof gl.getParameter(DEPTH_FUNC);

WebGlGetParametr.DEPTH_RANGE = {};
WebGlGetParametr.DEPTH_RANGE.int = DEPTH_RANGE;
WebGlGetParametr.DEPTH_RANGE.data = gl.getParameter(DEPTH_RANGE);
WebGlGetParametr.DEPTH_RANGE.datatype = typeof gl.getParameter(DEPTH_RANGE);

WebGlGetParametr.DEPTH_TEST = {};
WebGlGetParametr.DEPTH_TEST.int = DEPTH_TEST;
WebGlGetParametr.DEPTH_TEST.data = gl.getParameter(DEPTH_TEST);
WebGlGetParametr.DEPTH_TEST.datatype = typeof gl.getParameter(DEPTH_TEST);

WebGlGetParametr.DEPTH_WRITEMASK = {};
WebGlGetParametr.DEPTH_WRITEMASK.int = DEPTH_WRITEMASK;
WebGlGetParametr.DEPTH_WRITEMASK.data = gl.getParameter(DEPTH_WRITEMASK);
WebGlGetParametr.DEPTH_WRITEMASK.datatype = typeof gl.getParameter(DEPTH_WRITEMASK);

WebGlGetParametr.DITHER = {};
WebGlGetParametr.DITHER.int = DITHER;
WebGlGetParametr.DITHER.data = gl.getParameter(DITHER);
WebGlGetParametr.DITHER.datatype = typeof gl.getParameter(DITHER);

WebGlGetParametr.ELEMENT_ARRAY_BUFFER_BINDING = {};
WebGlGetParametr.ELEMENT_ARRAY_BUFFER_BINDING.int = ELEMENT_ARRAY_BUFFER_BINDING;
WebGlGetParametr.ELEMENT_ARRAY_BUFFER_BINDING.data = gl.getParameter(ELEMENT_ARRAY_BUFFER_BINDING);
WebGlGetParametr.ELEMENT_ARRAY_BUFFER_BINDING.datatype = typeof gl.getParameter(ELEMENT_ARRAY_BUFFER_BINDING);

WebGlGetParametr.FRAMEBUFFER_BINDING = {};
WebGlGetParametr.FRAMEBUFFER_BINDING.int = FRAMEBUFFER_BINDING;
WebGlGetParametr.FRAMEBUFFER_BINDING.data = gl.getParameter(FRAMEBUFFER_BINDING);
WebGlGetParametr.FRAMEBUFFER_BINDING.datatype = typeof gl.getParameter(FRAMEBUFFER_BINDING);

WebGlGetParametr.FRONT_FACE = {};
WebGlGetParametr.FRONT_FACE.int = FRONT_FACE;
WebGlGetParametr.FRONT_FACE.data = gl.getParameter(FRONT_FACE);
WebGlGetParametr.FRONT_FACE.datatype = typeof gl.getParameter(FRONT_FACE);

WebGlGetParametr.GENERATE_MIPMAP_HINT = {};
WebGlGetParametr.GENERATE_MIPMAP_HINT.int = GENERATE_MIPMAP_HINT;
WebGlGetParametr.GENERATE_MIPMAP_HINT.data = gl.getParameter(GENERATE_MIPMAP_HINT);
WebGlGetParametr.GENERATE_MIPMAP_HINT.datatype = typeof gl.getParameter(GENERATE_MIPMAP_HINT);

WebGlGetParametr.GREEN_BITS = {};
WebGlGetParametr.GREEN_BITS.int = GREEN_BITS;
WebGlGetParametr.GREEN_BITS.data = gl.getParameter(GREEN_BITS);
WebGlGetParametr.GREEN_BITS.datatype = typeof gl.getParameter(GREEN_BITS);

WebGlGetParametr.IMPLEMENTATION_COLOR_READ_FORMAT = {};
WebGlGetParametr.IMPLEMENTATION_COLOR_READ_FORMAT.int = IMPLEMENTATION_COLOR_READ_FORMAT;
WebGlGetParametr.IMPLEMENTATION_COLOR_READ_FORMAT.data = gl.getParameter(IMPLEMENTATION_COLOR_READ_FORMAT);
WebGlGetParametr.IMPLEMENTATION_COLOR_READ_FORMAT.datatype = typeof gl.getParameter(IMPLEMENTATION_COLOR_READ_FORMAT);

WebGlGetParametr.IMPLEMENTATION_COLOR_READ_TYPE = {};
WebGlGetParametr.IMPLEMENTATION_COLOR_READ_TYPE.int = IMPLEMENTATION_COLOR_READ_TYPE;
WebGlGetParametr.IMPLEMENTATION_COLOR_READ_TYPE.data = gl.getParameter(IMPLEMENTATION_COLOR_READ_TYPE);
WebGlGetParametr.IMPLEMENTATION_COLOR_READ_TYPE.datatype = typeof gl.getParameter(IMPLEMENTATION_COLOR_READ_TYPE);

WebGlGetParametr.LINE_WIDTH = {};
WebGlGetParametr.LINE_WIDTH.int = LINE_WIDTH;
WebGlGetParametr.LINE_WIDTH.data = gl.getParameter(LINE_WIDTH);
WebGlGetParametr.LINE_WIDTH.datatype = typeof gl.getParameter(LINE_WIDTH);

WebGlGetParametr.MAX_COMBINED_TEXTURE_IMAGE_UNITS = {};
WebGlGetParametr.MAX_COMBINED_TEXTURE_IMAGE_UNITS.int = MAX_COMBINED_TEXTURE_IMAGE_UNITS;
WebGlGetParametr.MAX_COMBINED_TEXTURE_IMAGE_UNITS.data = gl.getParameter(MAX_COMBINED_TEXTURE_IMAGE_UNITS);
WebGlGetParametr.MAX_COMBINED_TEXTURE_IMAGE_UNITS.datatype = typeof gl.getParameter(MAX_COMBINED_TEXTURE_IMAGE_UNITS);

WebGlGetParametr.MAX_CUBE_MAP_TEXTURE_SIZE = {};
WebGlGetParametr.MAX_CUBE_MAP_TEXTURE_SIZE.int = MAX_CUBE_MAP_TEXTURE_SIZE;
WebGlGetParametr.MAX_CUBE_MAP_TEXTURE_SIZE.data = gl.getParameter(MAX_CUBE_MAP_TEXTURE_SIZE);
WebGlGetParametr.MAX_CUBE_MAP_TEXTURE_SIZE.datatype = typeof gl.getParameter(MAX_CUBE_MAP_TEXTURE_SIZE);

WebGlGetParametr.MAX_FRAGMENT_UNIFORM_VECTORS = {};
WebGlGetParametr.MAX_FRAGMENT_UNIFORM_VECTORS.int = MAX_FRAGMENT_UNIFORM_VECTORS;
WebGlGetParametr.MAX_FRAGMENT_UNIFORM_VECTORS.data = gl.getParameter(MAX_FRAGMENT_UNIFORM_VECTORS);
WebGlGetParametr.MAX_FRAGMENT_UNIFORM_VECTORS.datatype = typeof gl.getParameter(MAX_FRAGMENT_UNIFORM_VECTORS);

WebGlGetParametr.MAX_RENDERBUFFER_SIZE = {};
WebGlGetParametr.MAX_RENDERBUFFER_SIZE.int = MAX_RENDERBUFFER_SIZE;
WebGlGetParametr.MAX_RENDERBUFFER_SIZE.data = gl.getParameter(MAX_RENDERBUFFER_SIZE);
WebGlGetParametr.MAX_RENDERBUFFER_SIZE.datatype = typeof gl.getParameter(MAX_RENDERBUFFER_SIZE);

WebGlGetParametr.MAX_TEXTURE_IMAGE_UNITS = {};
WebGlGetParametr.MAX_TEXTURE_IMAGE_UNITS.int = MAX_TEXTURE_IMAGE_UNITS;
WebGlGetParametr.MAX_TEXTURE_IMAGE_UNITS.data = gl.getParameter(MAX_TEXTURE_IMAGE_UNITS);
WebGlGetParametr.MAX_TEXTURE_IMAGE_UNITS.datatype = typeof gl.getParameter(MAX_TEXTURE_IMAGE_UNITS);

WebGlGetParametr.MAX_TEXTURE_SIZE = {};
WebGlGetParametr.MAX_TEXTURE_SIZE.int = MAX_TEXTURE_SIZE;
WebGlGetParametr.MAX_TEXTURE_SIZE.data = gl.getParameter(MAX_TEXTURE_SIZE);
WebGlGetParametr.MAX_TEXTURE_SIZE.datatype = typeof gl.getParameter(MAX_TEXTURE_SIZE);

WebGlGetParametr.MAX_VARYING_VECTORS = {};
WebGlGetParametr.MAX_VARYING_VECTORS.int = MAX_VARYING_VECTORS;
WebGlGetParametr.MAX_VARYING_VECTORS.data = gl.getParameter(MAX_VARYING_VECTORS);
WebGlGetParametr.MAX_VARYING_VECTORS.datatype = typeof gl.getParameter(MAX_VARYING_VECTORS);

WebGlGetParametr.MAX_VERTEX_ATTRIBS = {};
WebGlGetParametr.MAX_VERTEX_ATTRIBS.int = MAX_VERTEX_ATTRIBS;
WebGlGetParametr.MAX_VERTEX_ATTRIBS.data = gl.getParameter(MAX_VERTEX_ATTRIBS);
WebGlGetParametr.MAX_VERTEX_ATTRIBS.datatype = typeof gl.getParameter(MAX_VERTEX_ATTRIBS);

WebGlGetParametr.MAX_VERTEX_TEXTURE_IMAGE_UNITS = {};
WebGlGetParametr.MAX_VERTEX_TEXTURE_IMAGE_UNITS.int = MAX_VERTEX_TEXTURE_IMAGE_UNITS;
WebGlGetParametr.MAX_VERTEX_TEXTURE_IMAGE_UNITS.data = gl.getParameter(MAX_VERTEX_TEXTURE_IMAGE_UNITS);
WebGlGetParametr.MAX_VERTEX_TEXTURE_IMAGE_UNITS.datatype = typeof gl.getParameter(MAX_VERTEX_TEXTURE_IMAGE_UNITS);

WebGlGetParametr.MAX_VERTEX_UNIFORM_VECTORS = {};
WebGlGetParametr.MAX_VERTEX_UNIFORM_VECTORS.int = MAX_VERTEX_UNIFORM_VECTORS;
WebGlGetParametr.MAX_VERTEX_UNIFORM_VECTORS.data = gl.getParameter(MAX_VERTEX_UNIFORM_VECTORS);
WebGlGetParametr.MAX_VERTEX_UNIFORM_VECTORS.datatype = typeof gl.getParameter(MAX_VERTEX_UNIFORM_VECTORS);

WebGlGetParametr.MAX_VIEWPORT_DIMS = {};
WebGlGetParametr.MAX_VIEWPORT_DIMS.int = MAX_VIEWPORT_DIMS;
WebGlGetParametr.MAX_VIEWPORT_DIMS.data = gl.getParameter(MAX_VIEWPORT_DIMS);
WebGlGetParametr.MAX_VIEWPORT_DIMS.datatype = typeof gl.getParameter(MAX_VIEWPORT_DIMS);

WebGlGetParametr.PACK_ALIGNMENT = {};
WebGlGetParametr.PACK_ALIGNMENT.int = PACK_ALIGNMENT;
WebGlGetParametr.PACK_ALIGNMENT.data = gl.getParameter(PACK_ALIGNMENT);
WebGlGetParametr.PACK_ALIGNMENT.datatype = typeof gl.getParameter(PACK_ALIGNMENT);

WebGlGetParametr.POLYGON_OFFSET_FACTOR = {};
WebGlGetParametr.POLYGON_OFFSET_FACTOR.int = POLYGON_OFFSET_FACTOR;
WebGlGetParametr.POLYGON_OFFSET_FACTOR.data = gl.getParameter(POLYGON_OFFSET_FACTOR);
WebGlGetParametr.POLYGON_OFFSET_FACTOR.datatype = typeof gl.getParameter(POLYGON_OFFSET_FACTOR);

WebGlGetParametr.POLYGON_OFFSET_FILL = {};
WebGlGetParametr.POLYGON_OFFSET_FILL.int = POLYGON_OFFSET_FILL;
WebGlGetParametr.POLYGON_OFFSET_FILL.data = gl.getParameter(POLYGON_OFFSET_FILL);
WebGlGetParametr.POLYGON_OFFSET_FILL.datatype = typeof gl.getParameter(POLYGON_OFFSET_FILL);

WebGlGetParametr.POLYGON_OFFSET_UNITS = {};
WebGlGetParametr.POLYGON_OFFSET_UNITS.int = POLYGON_OFFSET_UNITS;
WebGlGetParametr.POLYGON_OFFSET_UNITS.data = gl.getParameter(POLYGON_OFFSET_UNITS);
WebGlGetParametr.POLYGON_OFFSET_UNITS.datatype = typeof gl.getParameter(POLYGON_OFFSET_UNITS);

WebGlGetParametr.RED_BITS = {};
WebGlGetParametr.RED_BITS.int = RED_BITS;
WebGlGetParametr.RED_BITS.data = gl.getParameter(RED_BITS);
WebGlGetParametr.RED_BITS.datatype = typeof gl.getParameter(RED_BITS);

WebGlGetParametr.RENDERBUFFER_BINDING = {};
WebGlGetParametr.RENDERBUFFER_BINDING.int = RENDERBUFFER_BINDING;
WebGlGetParametr.RENDERBUFFER_BINDING.data = gl.getParameter(RENDERBUFFER_BINDING);
WebGlGetParametr.RENDERBUFFER_BINDING.datatype = typeof gl.getParameter(RENDERBUFFER_BINDING);

WebGlGetParametr.RENDERER = {};
WebGlGetParametr.RENDERER.int = RENDERER;
WebGlGetParametr.RENDERER.data = gl.getParameter(RENDERER);
WebGlGetParametr.RENDERER.datatype = typeof gl.getParameter(RENDERER);

WebGlGetParametr.SAMPLE_BUFFERS = {};
WebGlGetParametr.SAMPLE_BUFFERS.int = SAMPLE_BUFFERS;
WebGlGetParametr.SAMPLE_BUFFERS.data = gl.getParameter(SAMPLE_BUFFERS);
WebGlGetParametr.SAMPLE_BUFFERS.datatype = typeof gl.getParameter(SAMPLE_BUFFERS);

WebGlGetParametr.SAMPLE_COVERAGE_INVERT = {};
WebGlGetParametr.SAMPLE_COVERAGE_INVERT.int = SAMPLE_COVERAGE_INVERT;
WebGlGetParametr.SAMPLE_COVERAGE_INVERT.data = gl.getParameter(SAMPLE_COVERAGE_INVERT);
WebGlGetParametr.SAMPLE_COVERAGE_INVERT.datatype = typeof gl.getParameter(SAMPLE_COVERAGE_INVERT);

WebGlGetParametr.SAMPLE_COVERAGE_VALUE = {};
WebGlGetParametr.SAMPLE_COVERAGE_VALUE.int = SAMPLE_COVERAGE_VALUE;
WebGlGetParametr.SAMPLE_COVERAGE_VALUE.data = gl.getParameter(SAMPLE_COVERAGE_VALUE);
WebGlGetParametr.SAMPLE_COVERAGE_VALUE.datatype = typeof gl.getParameter(SAMPLE_COVERAGE_VALUE);

WebGlGetParametr.SAMPLES = {};
WebGlGetParametr.SAMPLES.int = SAMPLES;
WebGlGetParametr.SAMPLES.data = gl.getParameter(SAMPLES);
WebGlGetParametr.SAMPLES.datatype = typeof gl.getParameter(SAMPLES);

WebGlGetParametr.SCISSOR_BOX = {};
WebGlGetParametr.SCISSOR_BOX.int = SCISSOR_BOX;
WebGlGetParametr.SCISSOR_BOX.data = gl.getParameter(SCISSOR_BOX);
WebGlGetParametr.SCISSOR_BOX.datatype = typeof gl.getParameter(SCISSOR_BOX);

WebGlGetParametr.SCISSOR_TEST = {};
WebGlGetParametr.SCISSOR_TEST.int = SCISSOR_TEST;
WebGlGetParametr.SCISSOR_TEST.data = gl.getParameter(SCISSOR_TEST);
WebGlGetParametr.SCISSOR_TEST.datatype = typeof gl.getParameter(SCISSOR_TEST);

WebGlGetParametr.SHADING_LANGUAGE_VERSION = {};
WebGlGetParametr.SHADING_LANGUAGE_VERSION.int = SHADING_LANGUAGE_VERSION;
WebGlGetParametr.SHADING_LANGUAGE_VERSION.data = gl.getParameter(SHADING_LANGUAGE_VERSION);
WebGlGetParametr.SHADING_LANGUAGE_VERSION.datatype = typeof gl.getParameter(SHADING_LANGUAGE_VERSION);

WebGlGetParametr.STENCIL_BACK_FAIL = {};
WebGlGetParametr.STENCIL_BACK_FAIL.int = STENCIL_BACK_FAIL;
WebGlGetParametr.STENCIL_BACK_FAIL.data = gl.getParameter(STENCIL_BACK_FAIL);
WebGlGetParametr.STENCIL_BACK_FAIL.datatype = typeof gl.getParameter(STENCIL_BACK_FAIL);

WebGlGetParametr.STENCIL_BACK_FUNC = {};
WebGlGetParametr.STENCIL_BACK_FUNC.int = STENCIL_BACK_FUNC;
WebGlGetParametr.STENCIL_BACK_FUNC.data = gl.getParameter(STENCIL_BACK_FUNC);
WebGlGetParametr.STENCIL_BACK_FUNC.datatype = typeof gl.getParameter(STENCIL_BACK_FUNC);

WebGlGetParametr.STENCIL_BACK_PASS_DEPTH_FAIL = {};
WebGlGetParametr.STENCIL_BACK_PASS_DEPTH_FAIL.int = STENCIL_BACK_PASS_DEPTH_FAIL;
WebGlGetParametr.STENCIL_BACK_PASS_DEPTH_FAIL.data = gl.getParameter(STENCIL_BACK_PASS_DEPTH_FAIL);
WebGlGetParametr.STENCIL_BACK_PASS_DEPTH_FAIL.datatype = typeof gl.getParameter(STENCIL_BACK_PASS_DEPTH_FAIL);

WebGlGetParametr.STENCIL_BACK_PASS_DEPTH_PASS = {};
WebGlGetParametr.STENCIL_BACK_PASS_DEPTH_PASS.int = STENCIL_BACK_PASS_DEPTH_PASS;
WebGlGetParametr.STENCIL_BACK_PASS_DEPTH_PASS.data = gl.getParameter(STENCIL_BACK_PASS_DEPTH_PASS);
WebGlGetParametr.STENCIL_BACK_PASS_DEPTH_PASS.datatype = typeof gl.getParameter(STENCIL_BACK_PASS_DEPTH_PASS);

WebGlGetParametr.STENCIL_BACK_REF = {};
WebGlGetParametr.STENCIL_BACK_REF.int = STENCIL_BACK_REF;
WebGlGetParametr.STENCIL_BACK_REF.data = gl.getParameter(STENCIL_BACK_REF);
WebGlGetParametr.STENCIL_BACK_REF.datatype = typeof gl.getParameter(STENCIL_BACK_REF);

WebGlGetParametr.STENCIL_BACK_VALUE_MASK = {};
WebGlGetParametr.STENCIL_BACK_VALUE_MASK.int = STENCIL_BACK_VALUE_MASK;
WebGlGetParametr.STENCIL_BACK_VALUE_MASK.data = gl.getParameter(STENCIL_BACK_VALUE_MASK);
WebGlGetParametr.STENCIL_BACK_VALUE_MASK.datatype = typeof gl.getParameter(STENCIL_BACK_VALUE_MASK);

WebGlGetParametr.STENCIL_BACK_WRITEMASK = {};
WebGlGetParametr.STENCIL_BACK_WRITEMASK.int = STENCIL_BACK_WRITEMASK;
WebGlGetParametr.STENCIL_BACK_WRITEMASK.data = gl.getParameter(STENCIL_BACK_WRITEMASK);
WebGlGetParametr.STENCIL_BACK_WRITEMASK.datatype = typeof gl.getParameter(STENCIL_BACK_WRITEMASK);

WebGlGetParametr.STENCIL_BITS = {};
WebGlGetParametr.STENCIL_BITS.int = STENCIL_BITS;
WebGlGetParametr.STENCIL_BITS.data = gl.getParameter(STENCIL_BITS);
WebGlGetParametr.STENCIL_BITS.datatype = typeof gl.getParameter(STENCIL_BITS);

WebGlGetParametr.STENCIL_CLEAR_VALUE = {};
WebGlGetParametr.STENCIL_CLEAR_VALUE.int = STENCIL_CLEAR_VALUE;
WebGlGetParametr.STENCIL_CLEAR_VALUE.data = gl.getParameter(STENCIL_CLEAR_VALUE);
WebGlGetParametr.STENCIL_CLEAR_VALUE.datatype = typeof gl.getParameter(STENCIL_CLEAR_VALUE);

WebGlGetParametr.STENCIL_FAIL = {};
WebGlGetParametr.STENCIL_FAIL.int = STENCIL_FAIL;
WebGlGetParametr.STENCIL_FAIL.data = gl.getParameter(STENCIL_FAIL);
WebGlGetParametr.STENCIL_FAIL.datatype = typeof gl.getParameter(STENCIL_FAIL);

WebGlGetParametr.STENCIL_FUNC = {};
WebGlGetParametr.STENCIL_FUNC.int = STENCIL_FUNC;
WebGlGetParametr.STENCIL_FUNC.data = gl.getParameter(STENCIL_FUNC);
WebGlGetParametr.STENCIL_FUNC.datatype = typeof gl.getParameter(STENCIL_FUNC);

WebGlGetParametr.STENCIL_PASS_DEPTH_FAIL = {};
WebGlGetParametr.STENCIL_PASS_DEPTH_FAIL.int = STENCIL_PASS_DEPTH_FAIL;
WebGlGetParametr.STENCIL_PASS_DEPTH_FAIL.data = gl.getParameter(STENCIL_PASS_DEPTH_FAIL);
WebGlGetParametr.STENCIL_PASS_DEPTH_FAIL.datatype = typeof gl.getParameter(STENCIL_PASS_DEPTH_FAIL);

WebGlGetParametr.STENCIL_PASS_DEPTH_PASS = {};
WebGlGetParametr.STENCIL_PASS_DEPTH_PASS.int = STENCIL_PASS_DEPTH_PASS;
WebGlGetParametr.STENCIL_PASS_DEPTH_PASS.data = gl.getParameter(STENCIL_PASS_DEPTH_PASS);
WebGlGetParametr.STENCIL_PASS_DEPTH_PASS.datatype = typeof gl.getParameter(STENCIL_PASS_DEPTH_PASS);

WebGlGetParametr.STENCIL_REF = {};
WebGlGetParametr.STENCIL_REF.int = STENCIL_REF;
WebGlGetParametr.STENCIL_REF.data = gl.getParameter(STENCIL_REF);
WebGlGetParametr.STENCIL_REF.datatype = typeof gl.getParameter(STENCIL_REF);

WebGlGetParametr.STENCIL_TEST = {};
WebGlGetParametr.STENCIL_TEST.int = STENCIL_TEST;
WebGlGetParametr.STENCIL_TEST.data = gl.getParameter(STENCIL_TEST);
WebGlGetParametr.STENCIL_TEST.datatype = typeof gl.getParameter(STENCIL_TEST);

WebGlGetParametr.STENCIL_VALUE_MASK = {};
WebGlGetParametr.STENCIL_VALUE_MASK.int = STENCIL_VALUE_MASK;
WebGlGetParametr.STENCIL_VALUE_MASK.data = gl.getParameter(STENCIL_VALUE_MASK);
WebGlGetParametr.STENCIL_VALUE_MASK.datatype = typeof gl.getParameter(STENCIL_VALUE_MASK);

WebGlGetParametr.STENCIL_WRITEMASK = {};
WebGlGetParametr.STENCIL_WRITEMASK.int = STENCIL_WRITEMASK;
WebGlGetParametr.STENCIL_WRITEMASK.data = gl.getParameter(STENCIL_WRITEMASK);
WebGlGetParametr.STENCIL_WRITEMASK.datatype = typeof gl.getParameter(STENCIL_WRITEMASK);

WebGlGetParametr.SUBPIXEL_BITS = {};
WebGlGetParametr.SUBPIXEL_BITS.int = SUBPIXEL_BITS;
WebGlGetParametr.SUBPIXEL_BITS.data = gl.getParameter(SUBPIXEL_BITS);
WebGlGetParametr.SUBPIXEL_BITS.datatype = typeof gl.getParameter(SUBPIXEL_BITS);

WebGlGetParametr.TEXTURE_BINDING_2D = {};
WebGlGetParametr.TEXTURE_BINDING_2D.int = TEXTURE_BINDING_2D;
WebGlGetParametr.TEXTURE_BINDING_2D.data = gl.getParameter(TEXTURE_BINDING_2D);
WebGlGetParametr.TEXTURE_BINDING_2D.datatype = typeof gl.getParameter(TEXTURE_BINDING_2D);

WebGlGetParametr.TEXTURE_BINDING_CUBE_MAP = {};
WebGlGetParametr.TEXTURE_BINDING_CUBE_MAP.int = TEXTURE_BINDING_CUBE_MAP;
WebGlGetParametr.TEXTURE_BINDING_CUBE_MAP.data = gl.getParameter(TEXTURE_BINDING_CUBE_MAP);
WebGlGetParametr.TEXTURE_BINDING_CUBE_MAP.datatype = typeof gl.getParameter(TEXTURE_BINDING_CUBE_MAP);

WebGlGetParametr.UNPACK_ALIGNMENT = {};
WebGlGetParametr.UNPACK_ALIGNMENT.int = UNPACK_ALIGNMENT;
WebGlGetParametr.UNPACK_ALIGNMENT.data = gl.getParameter(UNPACK_ALIGNMENT);
WebGlGetParametr.UNPACK_ALIGNMENT.datatype = typeof gl.getParameter(UNPACK_ALIGNMENT);

WebGlGetParametr.UNPACK_COLORSPACE_CONVERSION_WEBGL = {};
WebGlGetParametr.UNPACK_COLORSPACE_CONVERSION_WEBGL.int = UNPACK_COLORSPACE_CONVERSION_WEBGL;
WebGlGetParametr.UNPACK_COLORSPACE_CONVERSION_WEBGL.data = gl.getParameter(UNPACK_COLORSPACE_CONVERSION_WEBGL);
WebGlGetParametr.UNPACK_COLORSPACE_CONVERSION_WEBGL.datatype = typeof gl.getParameter(UNPACK_COLORSPACE_CONVERSION_WEBGL);

WebGlGetParametr.UNPACK_FLIP_Y_WEBGL = {};
WebGlGetParametr.UNPACK_FLIP_Y_WEBGL.int = UNPACK_FLIP_Y_WEBGL;
WebGlGetParametr.UNPACK_FLIP_Y_WEBGL.data = gl.getParameter(UNPACK_FLIP_Y_WEBGL);
WebGlGetParametr.UNPACK_FLIP_Y_WEBGL.datatype = typeof gl.getParameter(UNPACK_FLIP_Y_WEBGL);

WebGlGetParametr.UNPACK_PREMULTIPLY_ALPHA_WEBGL = {};
WebGlGetParametr.UNPACK_PREMULTIPLY_ALPHA_WEBGL.int = UNPACK_PREMULTIPLY_ALPHA_WEBGL;
WebGlGetParametr.UNPACK_PREMULTIPLY_ALPHA_WEBGL.data = gl.getParameter(UNPACK_PREMULTIPLY_ALPHA_WEBGL);
WebGlGetParametr.UNPACK_PREMULTIPLY_ALPHA_WEBGL.datatype = typeof gl.getParameter(UNPACK_PREMULTIPLY_ALPHA_WEBGL);

WebGlGetParametr.VENDOR = {};
WebGlGetParametr.VENDOR.int = VENDOR;
WebGlGetParametr.VENDOR.data = gl.getParameter(VENDOR);
WebGlGetParametr.VENDOR.datatype = typeof gl.getParameter(VENDOR);

WebGlGetParametr.VERSION = {};
WebGlGetParametr.VERSION.int = VERSION;
WebGlGetParametr.VERSION.data = gl.getParameter(VERSION);
WebGlGetParametr.VERSION.datatype = typeof gl.getParameter(VERSION);

WebGlGetParametr.VIEWPORT = {};
WebGlGetParametr.VIEWPORT.int = VIEWPORT;
WebGlGetParametr.VIEWPORT.data = gl.getParameter(VIEWPORT);
WebGlGetParametr.VIEWPORT.datatype = typeof gl.getParameter(VIEWPORT);

WebGlGetParametr.ext_UNMASKED_VENDOR_WEBGL = {};
WebGlGetParametr.ext_UNMASKED_VENDOR_WEBGL.int = ext_UNMASKED_VENDOR_WEBGL;
WebGlGetParametr.ext_UNMASKED_VENDOR_WEBGL.data = gl.getParameter(ext_UNMASKED_VENDOR_WEBGL);
WebGlGetParametr.ext_UNMASKED_VENDOR_WEBGL.datatype = typeof gl.getParameter(ext_UNMASKED_VENDOR_WEBGL);

WebGlGetParametr.ext_UNMASKED_RENDERER_WEBGL = {};
WebGlGetParametr.ext_UNMASKED_RENDERER_WEBGL.int = ext_UNMASKED_RENDERER_WEBGL;
WebGlGetParametr.ext_UNMASKED_RENDERER_WEBGL.data = gl.getParameter(ext_UNMASKED_RENDERER_WEBGL);
WebGlGetParametr.ext_UNMASKED_RENDERER_WEBGL.datatype = typeof gl.getParameter(ext_UNMASKED_RENDERER_WEBGL);


WebGlGetParametr.ext_MAX_DRAW_BUFFERS_WEBGL = {};
WebGlGetParametr.ext_MAX_DRAW_BUFFERS_WEBGL.int = ext_MAX_DRAW_BUFFERS_WEBGL;
WebGlGetParametr.ext_MAX_DRAW_BUFFERS_WEBGL.data = gl.getParameter(ext_MAX_DRAW_BUFFERS_WEBGL);
WebGlGetParametr.ext_MAX_DRAW_BUFFERS_WEBGL.datatype = typeof gl.getParameter(ext_MAX_DRAW_BUFFERS_WEBGL);

console.log(WebGlGetParametr);
copy(WebGlGetParametr);



var navigator = window.navigator;
var screen = window.screen;



    function jsFontsKey() {
        // a font will be compared against all the three default fonts.
        // and if it doesn't match all 3 then that font is not available.
        var baseFonts = ["monospace", "sans-serif", "serif"];

        var fontList = [
                        "Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS",
                        "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style",
                        "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New",
                        "Garamond", "Geneva", "Georgia",
                        "Helvetica", "Helvetica Neue",
                        "Impact",
                        "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode",
                        "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO",
                        "Palatino", "Palatino Linotype",
                        "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol",
                        "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS",
                        "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"
                      ];
        var extendedFontList = [
                        "Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter",
                        "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER",
                         "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville",
                        "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD",
                        "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed",
                        "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara",
                        "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer",
                        "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold",
                        "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark",
                        "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC",
                        "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte",
                        "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER",
                        "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT",
                        "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD",
                        "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV",
                        "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT",
                        "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN",
                        "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island",
                        "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic",
                        "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le",
                        "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti",
                        "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli",
                        "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN",
                        "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB",
                        "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla",
                        "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood",
                        "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket",
                        "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC",
                        "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold",
                        "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin",
                        "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];

 
        fontList = fontList.concat(extendedFontList);
        var userDefinedFonts = [];
        fontList = fontList.concat(userDefinedFonts);

        //we use m or w because these two characters take up the maximum width.
        // And we use a LLi so that the same matching fonts can get separated
        //var testString = "mmm\u20B9\u2581\u20BA\uA73D\uFFFD\u20B8\u05C6\u1E9E\u097F\uF003mmmmmmmlli";
        var testString = "mmmmmmmmmmlli"; // maxmind

        //we test using 72px font size, we may use any size. I guess larger the better.
        var testSize = "72px"; // maxmind

        var h = document.getElementsByTagName("body")[0];

        // div to load spans for the base fonts
        var baseFontsDiv = document.createElement("div");

        // div to load spans for the fonts to detect
        var fontsDiv = document.createElement("div");

        var defaultWidth = {};
        var defaultHeight = {};

        // creates a span where the fonts will be loaded
        var createSpan = function() {
            var s = document.createElement("span");
            /*
             * We need this css as in some weird browser this
             * span elements shows up for a microSec which creates a
             * bad user experience
             */
            s.style.position = "absolute";
            s.style.left = "-9999px";
            s.style.fontSize = testSize;
            s.style.lineHeight = "normal";
            s.innerHTML = testString;
            return s;
        };

        // creates a span and load the font to detect and a base font for fallback
        var createSpanWithFonts = function(fontToDetect, baseFont) {
            var s = createSpan();
            s.style.fontFamily = "'" + fontToDetect + "'," + baseFont;
            return s;
        };

        // creates spans for the base fonts and adds them to baseFontsDiv
        var initializeBaseFontsSpans = function() {
            var spans = [];
            for (var index = 0, length = baseFonts.length; index < length; index++) {
                var s = createSpan();
                s.style.fontFamily = baseFonts[index];
                baseFontsDiv.appendChild(s);
                spans.push(s);
            }
            return spans;
        };

        // creates spans for the fonts to detect and adds them to fontsDiv
        var initializeFontsSpans = function() {
            var spans = {};
            for(var i = 0, l = fontList.length; i < l; i++) {
                var fontSpans = [];
                for(var j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) {
                    var s = createSpanWithFonts(fontList[i], baseFonts[j]);
                    fontsDiv.appendChild(s);
                    fontSpans.push(s);
                }
                spans[fontList[i]] = fontSpans; // Stores {fontName : [spans for that font]}
            }
            return spans;
        };

        // checks if a font is available
        var isFontAvailable = function(fontSpans) {
            var detected = false;
            for(var i = 0; i < baseFonts.length; i++) {
                detected = (fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]]);
                if(detected) {
                    return detected;
                }
            }
            return detected;
        };

        // create spans for base fonts
        var baseFontsSpans = initializeBaseFontsSpans();

        // add the spans to the DOM
        h.appendChild(baseFontsDiv);

        // get the default width for the three base fonts
        for (var index = 0, length = baseFonts.length; index < length; index++) {
            defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth; // width for the default font
            defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight; // height for the default font
        }

        // create spans for fonts to detect
        var fontsSpans = initializeFontsSpans();

        // add all the spans to the DOM
        h.appendChild(fontsDiv);

        // check available fonts
        var available = [];
        for(var i = 0, l = fontList.length; i < l; i++) {
            if(isFontAvailable(fontsSpans[fontList[i]])) {
                available.push(fontList[i]);
            }
        }

        // remove spans from DOM
        h.removeChild(fontsDiv);
        h.removeChild(baseFontsDiv);

        var js_fonts = available;
        console.log(js_fonts);
    }
    jsFontsKey();