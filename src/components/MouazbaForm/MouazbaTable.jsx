import { Container, Typography, Box } from "@mui/material";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const initialRows = [
  {
    id: 1,
    م: 1,
    اسم_التلميذ: "أحمد",
    الاول_1: 10,
    الثاني_1: 9,
    الثالث_1: 8,
    الرابع_1: 7,
    المتوسط_1: 8.5,
    مهام_ادائية_1: 9,
    الواجب_1: 5,
    النشاط_1: 5,
    سلوك_1: 1,
    المواظبة_1: 4,
    المجموع_1: 30,
  },
  {
    id: 2,
    م: 2,
    اسم_التلميذ: "محمد",
    الاول_2: 8,
    الثاني_2: 7,
    الثالث_2: 9,
    الرابع_2: 6,
    المتوسط_2: 7.5,
    مهام_ادائية_2: 8,
    الواجب_2: 6,
    النشاط_2: 7,
    سلوك_2: 2,
    المواظبة_2: 3,
    المجموع_2: 29,
  },
];

const createMonthGroup = (monthId) => ({
  groupId: monthId,
  headerName: `شهر ${monthId}`,
  children: [
    {
      groupId: "التقييم_الاسبوعي",
      headerName: "التقييم الاسبوعي",
      children: [
        { field: `الاول_${monthId}`, headerName: "الأول" },
        { field: `الثاني_${monthId}`, headerName: "الثاني" },
        { field: `الثالث_${monthId}`, headerName: "الثالث" },
        { field: `الرابع_${monthId}`, headerName: "الرابع" },
      ],
    },
    { field: `المتوسط_${monthId}`, headerName: "المتوسط" },
    { field: `مهام_ادائية_${monthId}`, headerName: "مهام ادائية" },
    { field: `الواجب_${monthId}`, headerName: "الواجب" },
    { field: `النشاط_${monthId}`, headerName: "النشاط" },
    { field: `سلوك_${monthId}`, headerName: "سلوك" },
    { field: `المواظبة_${monthId}`, headerName: "المواظبة" },
    { field: `المجموع_${monthId}`, headerName: "المجموع" },
  ],
});

const columnGroupingModel = [
  createMonthGroup("1"),
  createMonthGroup("2"),
  createMonthGroup("3"),
];

const MouazbaTable = () => {
  const [rows] = useState(initialRows);

  const columns = [
    { field: "م", headerName: "م", width: 50 },
    { field: "اسم_التلميذ", headerName: "اسم التلميذ", width: 180 },
    { field: "الاول_1", headerName: "الأول", width: 100 },
    { field: "الثاني_1", headerName: "الثاني", width: 100 },
    { field: "الثالث_1", headerName: "الثالث", width: 100 },
    { field: "الرابع_1", headerName: "الرابع", width: 100 },
    { field: "المتوسط_1", headerName: "المتوسط", width: 100 },
    { field: "مهام_ادائية_1", headerName: "مهام ادائية", width: 120 },
    { field: "الواجب_1", headerName: "الواجب", width: 100 },
    { field: "النشاط_1", headerName: "النشاط", width: 100 },
    { field: "سلوك_1", headerName: "سلوك", width: 100 },
    { field: "المواظبة_1", headerName: "المواظبة", width: 100 },
    { field: "المجموع_1", headerName: "المجموع", width: 100 },
    { field: "الاول_2", headerName: "الأول", width: 100 },
    { field: "الثاني_2", headerName: "الثاني", width: 100 },
    { field: "الثالث_2", headerName: "الثالث", width: 100 },
    { field: "الرابع_2", headerName: "الرابع", width: 100 },
    { field: "المتوسط_2", headerName: "المتوسط", width: 100 },
    { field: "مهام_ادائية_2", headerName: "مهام ادائية", width: 120 },
    { field: "الواجب_2", headerName: "الواجب", width: 100 },
    { field: "النشاط_2", headerName: "النشاط", width: 100 },
    { field: "سلوك_2", headerName: "سلوك", width: 100 },
    { field: "المواظبة_2", headerName: "المواظبة", width: 100 },
    { field: "المجموع_2", headerName: "المجموع", width: 100 },
    { field: "الاول_3", headerName: "الأول", width: 100 },
    { field: "الثاني_3", headerName: "الثاني", width: 100 },
    { field: "الثالث_3", headerName: "الثالث", width: 100 },
    { field: "الرابع_3", headerName: "الرابع", width: 100 },
    { field: "المتوسط_3", headerName: "المتوسط", width: 100 },
    { field: "مهام_ادائية_3", headerName: "مهام ادائية", width: 120 },
    { field: "الواجب_3", headerName: "الواجب", width: 100 },
    { field: "النشاط_3", headerName: "النشاط", width: 100 },
    { field: "سلوك_3", headerName: "سلوك", width: 100 },
    { field: "المواظبة_3", headerName: "المواظبة", width: 100 },
    { field: "المجموع_3", headerName: "المجموع", width: 100 },
  ];

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: 35, textAlign: "center", mt: 5 }}
      >
        احسب المواظبة
      </Typography>

      <Box
        sx={{
          height: 500,
          width: "100%",
          "& .actions": {
            color: "text.secondary",
          },
          "& .textPrimary": {
            color: "text.primary",
          },
        }}
        dir="rtl"
      >
        <DataGrid
          rows={rows}
          columns={columns}
          columnGroupingModel={columnGroupingModel}
          disableSelectionOnClick
        />
      </Box>
    </Container>
  );
};

export default MouazbaTable;
