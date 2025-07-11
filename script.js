// Data storage
let bookings = [];
let selectedRoom = "";

// Country codes data
const countryCodes = [
  { code: "+62", name: "ID", label: "+62 (Indonesia)" },
  { code: "+1", name: "US/CA", label: "+1 (US/CA & Caribbean)" },
  { code: "+7", name: "RU/KZ", label: "+7 (RU/KZ)" },
  { code: "+20", name: "EG", label: "+20 (Egypt)" },
  { code: "+27", name: "ZA", label: "+27 (South Africa)" },
  { code: "+30", name: "GR", label: "+30 (Greece)" },
  { code: "+31", name: "NL", label: "+31 (Netherlands)" },
  { code: "+32", name: "BE", label: "+32 (Belgium)" },
  { code: "+33", name: "FR", label: "+33 (France)" },
  { code: "+34", name: "ES", label: "+34 (Spain)" },
  { code: "+36", name: "HU", label: "+36 (Hungary)" },
  { code: "+39", name: "IT", label: "+39 (Italy)" },
  { code: "+40", name: "RO", label: "+40 (Romania)" },
  { code: "+41", name: "CH", label: "+41 (Switzerland)" },
  { code: "+43", name: "AT", label: "+43 (Austria)" },
  { code: "+44", name: "UK", label: "+44 (United Kingdom)" },
  { code: "+45", name: "DK", label: "+45 (Denmark)" },
  { code: "+46", name: "SE", label: "+46 (Sweden)" },
  { code: "+47", name: "NO", label: "+47 (Norway)" },
  { code: "+48", name: "PL", label: "+48 (Poland)" },
  { code: "+49", name: "DE", label: "+49 (Germany)" },
  { code: "+51", name: "PE", label: "+51 (Peru)" },
  { code: "+52", name: "MX", label: "+52 (Mexico)" },
  { code: "+53", name: "CU", label: "+53 (Cuba)" },
  { code: "+54", name: "AR", label: "+54 (Argentina)" },
  { code: "+55", name: "BR", label: "+55 (Brazil)" },
  { code: "+56", name: "CL", label: "+56 (Chile)" },
  { code: "+57", name: "CO", label: "+57 (Colombia)" },
  { code: "+58", name: "VE", label: "+58 (Venezuela)" },
  { code: "+60", name: "MY", label: "+60 (Malaysia)" },
  { code: "+61", name: "AU", label: "+61 (Australia)" },
  { code: "+63", name: "PH", label: "+63 (Philippines)" },
  { code: "+64", name: "NZ", label: "+64 (New Zealand)" },
  { code: "+65", name: "SG", label: "+65 (Singapore)" },
  { code: "+66", name: "TH", label: "+66 (Thailand)" },
  { code: "+81", name: "JP", label: "+81 (Japan)" },
  { code: "+82", name: "KR", label: "+82 (South Korea)" },
  { code: "+84", name: "VN", label: "+84 (Vietnam)" },
  { code: "+86", name: "CN", label: "+86 (China)" },
  { code: "+90", name: "TR", label: "+90 (Turkey)" },
  { code: "+91", name: "IN", label: "+91 (India)" },
  { code: "+92", name: "PK", label: "+92 (Pakistan)" },
  { code: "+93", name: "AF", label: "+93 (Afghanistan)" },
  { code: "+94", name: "LK", label: "+94 (Sri Lanka)" },
  { code: "+95", name: "MM", label: "+95 (Myanmar)" },
  { code: "+98", name: "IR", label: "+98 (Iran)" }
];

// Room data
const rooms = [
  {
    id: "ruang-a",
    name: "Ruang A",
    capacity: 12,
    type: "Dengan Kursi",
    displayName: "Ruang A (12 orang)"
  },
  {
    id: "ruang-b",
    name: "Ruang B",
    capacity: 8,
    type: "Dengan Kursi",
    displayName: "Ruang B (8 orang)"
  },
  {
    id: "ruang-c",
    name: "Ruang C",
    capacity: 12,
    type: "Dengan Kursi",
    displayName: "Ruang C (12 orang)"
  },
  {
    id: "common-1",
    name: "Common Room 1",
    capacity: 30,
    type: "Tanpa Kursi",
    displayName: "Common Room 1 (30 orang)"
  },
  {
    id: "common-2",
    name: "Common Room 2",
    capacity: 20,
    type: "Tanpa Kursi",
    displayName: "Common Room 2 (20 orang)"
  }
];

// Majelis data
const majelisList = [
  { id: "majelis-pendidikan", name: "Majelis Pendidikan" },
  { id: "majelis-peduli", name: "Majelis Peduli" }
];

// Sarana pendukung data
const saranaList = [
  { id: "tv", name: "TV", label: "📺 TV/LCD" },
  { id: "papan-tulis", name: "Papan Tulis", label: "📋 Papan Tulis" },
  { id: "proyektor", name: "Proyektor", label: "📽️ Proyektor" },
  { id: "sound-system", name: "Sound System", label: "🔊 Sound System" },
  { id: "wifi", name: "WiFi", label: "📶 WiFi" },
  { id: "ac", name: "AC", label: "❄️ AC" },
  { id: "flipchart", name: "Flipchart", label: "📊 Flipchart" },
  { id: "konsumsi", name: "Konsumsi", label: "☕ Konsumsi" }
];

// Initialize dynamic content
function initializeDynamicContent() {
  populateCountryCodes();
  populateMajelis();
  populateRooms();
  populateSarana();
}

// Populate country codes dropdown
function populateCountryCodes() {
  const countryCodeSelect = document.getElementById("countryCode");
  countryCodeSelect.innerHTML = "";
  
  countryCodes.forEach(country => {
    const option = document.createElement("option");
    option.value = country.code;
    option.textContent = country.label;
    countryCodeSelect.appendChild(option);
  });
}

// Populate majelis dropdown
function populateMajelis() {
  const majelisSelect = document.getElementById("majelis");
  // Keep the default option
  const defaultOption = majelisSelect.querySelector('option[value=""]');
  majelisSelect.innerHTML = "";
  majelisSelect.appendChild(defaultOption);
  
  majelisList.forEach(majelis => {
    const option = document.createElement("option");
    option.value = majelis.id;
    option.textContent = majelis.name;
    majelisSelect.appendChild(option);
  });
}

// Populate rooms
function populateRooms() {
  const roomGrid = document.querySelector(".room-grid");
  roomGrid.innerHTML = "";
  
  rooms.forEach(room => {
    const roomCard = document.createElement("div");
    roomCard.className = "room-card";
    roomCard.dataset.room = room.id;
    roomCard.innerHTML = `
      <div class="room-type">${room.type}</div>
      <h3>${room.name}</h3>
      <p>Maks ${room.capacity} orang</p>
    `;
    roomGrid.appendChild(roomCard);
  });
  
  // Re-attach event listeners for room cards
  attachRoomEventListeners();
}

// Populate sarana pendukung
function populateSarana() {
  const checkboxGroup = document.querySelector(".checkbox-group");
  checkboxGroup.innerHTML = "";
  
  saranaList.forEach(sarana => {
    const checkboxItem = document.createElement("div");
    checkboxItem.className = "checkbox-item";
    checkboxItem.innerHTML = `
      <input type="checkbox" id="${sarana.id}" name="sarana" value="${sarana.name}" />
      <label for="${sarana.id}">${sarana.label}</label>
    `;
    checkboxGroup.appendChild(checkboxItem);
  });
  
  // Re-attach event listeners for checkboxes
  attachCheckboxEventListeners();
}

// Attach event listeners for room cards
function attachRoomEventListeners() {
  const roomCards = document.querySelectorAll(".room-card");
  roomCards.forEach((card) => {
    card.addEventListener("click", function () {
      roomCards.forEach((c) => c.classList.remove("selected"));
      this.classList.add("selected");
      selectedRoom = this.dataset.room;
    });
  });
}

// Attach event listeners for checkboxes
function attachCheckboxEventListeners() {
  const checkboxItems = document.querySelectorAll(".checkbox-item");
  checkboxItems.forEach((item) => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    item.addEventListener("click", function (e) {
      if (e.target.type !== "checkbox") {
        checkbox.checked = !checkbox.checked;
      }
      this.classList.toggle("checked", checkbox.checked);
    });

    checkbox.addEventListener("change", function () {
      item.classList.toggle("checked", this.checked);
    });
  });
}

// Theme toggle function
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  const themeText = document.getElementById("theme-text");

  document.documentElement.setAttribute("data-theme", newTheme);
  themeText.textContent = newTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";

  // Store preference
  localStorage.setItem("theme", newTheme);
}

// Set light mode as default
document.documentElement.setAttribute("data-theme", "light");

// Load saved theme preference and initialize content
window.addEventListener("load", function () {
  const savedTheme = localStorage.getItem("theme") || "light"; // Default to light if no saved preference
  document.documentElement.setAttribute("data-theme", savedTheme);
  const themeText = document.getElementById("theme-text");
  themeText.textContent = savedTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
  
  // Initialize dynamic content
  initializeDynamicContent();
});

// DOM elements
const bookingForm = document.getElementById("bookingForm");
const bookingsList = document.getElementById("bookingsList");
const alertContainer = document.getElementById("alert-container");
const totalBookingsEl = document.getElementById("totalBookings");
const todayBookingsEl = document.getElementById("todayBookings");
const tanggalMulaiInput = document.getElementById("tanggalMulai");
const tanggalSelesaiInput = document.getElementById("tanggalSelesai");
const isRecurringCheckbox = document.getElementById("isRecurring");
const recurringOptions = document.getElementById("recurringOptions");
const recurringTypeSelect = document.getElementById("recurringType");
const weeklyOptions = document.getElementById("weeklyOptions");
const intervalLabel = document.getElementById("intervalLabel");
const previewText = document.getElementById("previewText");

// Set minimum date to today
const today = new Date();
const todayStr = today.toISOString().split("T")[0];
tanggalMulaiInput.min = todayStr;
tanggalSelesaiInput.min = todayStr;
tanggalMulaiInput.value = todayStr;
tanggalSelesaiInput.value = todayStr;

// Event listeners
tanggalMulaiInput.addEventListener("change", function () {
  tanggalSelesaiInput.min = this.value;
  if (tanggalSelesaiInput.value < this.value) {
    tanggalSelesaiInput.value = this.value;
  }
  updateRecurringPreview();
});

// Recurring booking event listeners
isRecurringCheckbox.addEventListener("change", function () {
  recurringOptions.style.display = this.checked ? "block" : "none";
  updateRecurringPreview();
});

recurringTypeSelect.addEventListener("change", function () {
  weeklyOptions.style.display = this.value === "weekly" ? "block" : "none";
  
  // Update interval label
  const labels = {
    daily: "hari",
    weekly: "minggu", 
    monthly: "bulan"
  };
  intervalLabel.textContent = labels[this.value];
  
  updateRecurringPreview();
});

// Add event listeners for recurring options
["recurringInterval", "recurringDuration", "recurringDurationUnit", "recurringEndDate"].forEach(id => {
  document.getElementById(id).addEventListener("change", updateRecurringPreview);
});

// Add event listeners for weekly days
document.querySelectorAll('input[name="recurringDays"]').forEach(checkbox => {
  checkbox.addEventListener("change", updateRecurringPreview);
});

// Update recurring preview
function updateRecurringPreview() {
  if (!isRecurringCheckbox.checked) {
    previewText.textContent = "Pilih opsi pengulangan untuk melihat preview";
    return;
  }

  const startDate = tanggalMulaiInput.value;
  const startTime = document.getElementById("waktuMulai").value;
  const endTime = document.getElementById("waktuSelesai").value;
  const type = recurringTypeSelect.value;
  const interval = document.getElementById("recurringInterval").value;
  const duration = document.getElementById("recurringDuration").value;
  const durationUnit = document.getElementById("recurringDurationUnit").value;
  const endDate = document.getElementById("recurringEndDate").value;

  if (!startDate || !startTime || !endTime) {
    previewText.textContent = "Lengkapi tanggal dan waktu untuk melihat preview";
    return;
  }

  let preview = "";
  const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  
  if (type === "daily") {
    preview = `Setiap ${interval} hari dari ${formatDate(startDate)} jam ${startTime} - ${endTime}`;
  } else if (type === "weekly") {
    const selectedDays = Array.from(document.querySelectorAll('input[name="recurringDays"]:checked'))
      .map(cb => dayNames[parseInt(cb.value)]);
    
    if (selectedDays.length === 0) {
      preview = "Pilih hari untuk pengulangan mingguan";
    } else {
      preview = `Setiap ${interval} minggu pada hari ${selectedDays.join(", ")} jam ${startTime} - ${endTime}`;
    }
  } else if (type === "monthly") {
    const date = new Date(startDate);
    const dayOfMonth = date.getDate();
    preview = `Setiap ${interval} bulan pada tanggal ${dayOfMonth} jam ${startTime} - ${endTime}`;
  }

  if (endDate) {
    preview += ` sampai ${formatDate(endDate)}`;
  } else {
    preview += ` selama ${duration} ${durationUnit === "weeks" ? "minggu" : "bulan"}`;
  }

  previewText.textContent = preview;
}

// Generate recurring dates
function generateRecurringDates(startDate, endDate, startTime, endTime, type, interval, selectedDays, duration, durationUnit, recurringEndDate) {
  const dates = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  // Calculate actual end date
  let actualEndDate;
  if (recurringEndDate) {
    actualEndDate = new Date(recurringEndDate);
  } else {
    actualEndDate = new Date(start);
    if (durationUnit === "weeks") {
      actualEndDate.setDate(actualEndDate.getDate() + (duration * 7));
    } else if (durationUnit === "months") {
      actualEndDate.setMonth(actualEndDate.getMonth() + duration);
    }
  }

  let currentDate = new Date(start);
  
  while (currentDate <= actualEndDate) {
    let shouldAdd = false;
    
    if (type === "daily") {
      shouldAdd = true;
    } else if (type === "weekly") {
      shouldAdd = selectedDays.includes(currentDate.getDay().toString());
    } else if (type === "monthly") {
      shouldAdd = currentDate.getDate() === start.getDate();
    }
    
    if (shouldAdd) {
      // Calculate end date for this occurrence
      const occurrenceEnd = new Date(currentDate);
      const timeDiff = end.getTime() - start.getTime();
      occurrenceEnd.setTime(occurrenceEnd.getTime() + timeDiff);
      
      dates.push({
        startDate: currentDate.toISOString().split('T')[0],
        endDate: occurrenceEnd.toISOString().split('T')[0],
        startTime: startTime,
        endTime: endTime
      });
    }
    
    // Move to next occurrence
    if (type === "daily") {
      currentDate.setDate(currentDate.getDate() + parseInt(interval));
    } else if (type === "weekly") {
      currentDate.setDate(currentDate.getDate() + 1);
    } else if (type === "monthly") {
      currentDate.setMonth(currentDate.getMonth() + parseInt(interval));
    }
  }
  
  return dates;
}
function getBookingTimeStatus(date, time) {
  const bookingDateTime = new Date(date + "T" + time);
  const now = new Date();

  if (bookingDateTime < now) {
    return "past";
  } else if (bookingDateTime.toDateString() === now.toDateString()) {
    return "active";
  } else {
    return "upcoming";
  }
}

function renderBookings() {
  bookingsList.innerHTML = "";

  if (bookings.length === 0) {
    bookingsList.innerHTML = '<p style="text-align: center; color: #666; padding: 40px;">Belum ada reservasi yang dibuat</p>';
    return;
  }

  const sortedBookings = [...bookings].sort((a, b) => {
    const dateA = new Date(a.tanggalMulai + "T" + a.waktuMulai);
    const dateB = new Date(b.tanggalMulai + "T" + b.waktuMulai);
    return dateB - dateA;
  });

  sortedBookings.forEach((booking) => {
    const bookingEl = document.createElement("div");
    bookingEl.className = "booking-item";

    const roomName = getRoomName(booking.ruangan);
    const majelisName = getMajelisName(booking.majelis);
    const timeStatus = getBookingTimeStatus(booking.tanggalMulai, booking.waktuMulai);
    const timeStatusClass = `status-${timeStatus}`;
    const timeStatusText = timeStatus === "active" ? "Aktif" : timeStatus === "upcoming" ? "Mendatang" : "Selesai";

    const approvalStatusClass = `approval-${booking.approvalStatus}`;
    const approvalStatusText = booking.approvalStatus === "approved" ? "Disetujui" : "Pending";

    const saranaPendukung = booking.saranaPendukung.length > 0 ? booking.saranaPendukung.join(", ") : "Tidak ada";
    const saranaLainnya = booking.saranaLainnya ? booking.saranaLainnya : "";
    const allSarana = saranaLainnya
      ? saranaPendukung === "Tidak ada"
        ? saranaLainnya
        : saranaPendukung + ", " + saranaLainnya
      : saranaPendukung;

    // Recurring info
    const recurringInfo = booking.isRecurring 
      ? `<p><strong>Seri:</strong> ${booking.recurringInfo.currentOccurrence} dari ${booking.recurringInfo.totalOccurrences} (${booking.recurringInfo.type})</p>`
      : "";

    // Approval info
    const approvalInfo = booking.approvalStatus === "approved" && booking.approvedBy 
      ? `<p><strong>Disetujui oleh:</strong> ${booking.approvedBy}</p>
         <p><strong>Tanggal persetujuan:</strong> ${formatDateTime(booking.approvedAt)}</p>`
      : "";

    bookingEl.innerHTML = `
      <button class="delete-btn" onclick="deleteBooking(${booking.id})">×</button>
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
        <h4 style="margin: 0; flex: 1;">${roomName} ${booking.isRecurring ? "🔄" : ""}</h4>
        <span class="status-badge ${timeStatusClass}" style="margin-left: 10px;">${timeStatusText}</span>
      </div>
      <p><strong>Nama:</strong> ${booking.nama}</p>
      <p><strong>Majelis:</strong> ${majelisName}</p>
      <p><strong>Telepon:</strong> ${booking.phone}</p>
      <p><strong>Mulai:</strong> ${formatDate(booking.tanggalMulai)} ${booking.waktuMulai}</p>
      <p><strong>Selesai:</strong> ${formatDate(booking.tanggalSelesai)} ${booking.waktuSelesai}</p>
      <p><strong>Sarana:</strong> ${allSarana}</p>
      <p><strong>Agenda:</strong> ${booking.agenda}</p>
      ${recurringInfo}
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
        <div>
          <strong>Status:</strong> 
          <span class="approval-badge ${approvalStatusClass}">${approvalStatusText}</span>
        </div>
        <div style="display: flex; gap: 10px;">
          ${booking.approvalStatus === "pending" ? 
            `<button class="approve-btn" onclick="approveBooking(${booking.id})">✓ Setujui</button>` 
            : ""
          }
          ${booking.isRecurring ? 
            `<button class="recurring-btn" onclick="manageRecurring(${booking.recurringGroup})">🔄 Kelola Seri</button>` 
            : ""
          }
        </div>
      </div>
      ${approvalInfo}
    `;

    bookingsList.appendChild(bookingEl);
  });
}

function getRoomName(roomId) {
  const room = rooms.find(r => r.id === roomId);
  return room ? room.displayName : roomId;
}

function getMajelisName(majelisId) {
  const majelis = majelisList.find(m => m.id === majelisId);
  return majelis ? majelis.name : majelisId;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatDateTime(dateTimeString) {
  const date = new Date(dateTimeString);
  return date.toLocaleString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

function deleteBooking(id) {
  showPopup(
    "Apakah Anda yakin ingin menghapus reservasi ini?",
    "error",
    "Konfirmasi Hapus"
  );
  
  // Replace the default button with custom confirmation buttons
  const popup = document.querySelector('.popup-modal');
  const buttonContainer = popup.querySelector('.popup-button').parentElement;
  buttonContainer.innerHTML = `
    <div style="display: flex; gap: 10px; justify-content: center;">
      <button class="popup-button error" onclick="confirmDelete(${id})">
        Ya, Hapus
      </button>
      <button class="popup-button" onclick="closePopup()">
        Batal
      </button>
    </div>
  `;
}

// Approve booking function
function approveBooking(id) {
  showPopup(
    "Masukkan nama Anda untuk menyetujui reservasi ini:",
    "success",
    "Setujui Reservasi"
  );
  
  // Replace the default button with input and confirmation buttons
  const popup = document.querySelector('.popup-modal');
  const buttonContainer = popup.querySelector('.popup-button').parentElement;
  buttonContainer.innerHTML = `
    <div style="margin-bottom: 20px;">
      <input type="text" id="approverName" placeholder="Nama lengkap..." 
             style="width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 8px; font-size: 1em;" />
    </div>
    <div style="display: flex; gap: 10px; justify-content: center;">
      <button class="popup-button" onclick="confirmApproval(${id})">
        ✓ Setujui
      </button>
      <button class="popup-button error" onclick="closePopup()">
        Batal
      </button>
    </div>
  `;
  
  // Focus on input
  setTimeout(() => {
    document.getElementById('approverName').focus();
  }, 100);
  
  // Handle Enter key
  document.getElementById('approverName').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      confirmApproval(id);
    }
  });
}

function confirmApproval(id) {
  const approverName = document.getElementById('approverName').value.trim();
  
  if (!approverName) {
    showPopup("Nama tidak boleh kosong!", "error", "Input Tidak Valid");
    return;
  }
  
  // Update booking status
  const booking = bookings.find(b => b.id === id);
  if (booking) {
    booking.approvalStatus = "approved";
    booking.approvedBy = approverName;
    booking.approvedAt = new Date().toISOString();
    
    renderBookings();
    closePopup();
    showPopup(`Reservasi berhasil disetujui oleh ${approverName}!`, "success", "Reservasi Disetujui!");
  }
}

// Manage recurring booking series
function manageRecurring(recurringGroup) {
  const recurringBookings = bookings.filter(b => b.recurringGroup === recurringGroup);
  
  if (recurringBookings.length === 0) return;
  
  const firstBooking = recurringBookings[0];
  const approved = recurringBookings.filter(b => b.approvalStatus === "approved").length;
  const pending = recurringBookings.filter(b => b.approvalStatus === "pending").length;
  
  showPopup(
    `Seri booking berulang ini memiliki ${recurringBookings.length} reservasi:<br/>
     • ${approved} disetujui<br/>
     • ${pending} pending<br/><br/>
     Apa yang ingin Anda lakukan?`,
    "success",
    "Kelola Seri Booking"
  );
  
  // Replace the default button with management options
  const popup = document.querySelector('.popup-modal');
  const buttonContainer = popup.querySelector('.popup-button').parentElement;
  buttonContainer.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <button class="popup-button" onclick="approveAllRecurring(${recurringGroup})">
        ✓ Setujui Semua Pending
      </button>
      <button class="popup-button error" onclick="deleteAllRecurring(${recurringGroup})">
        🗑️ Hapus Semua Seri
      </button>
      <button class="popup-button" onclick="closePopup()">
        Tutup
      </button>
    </div>
  `;
}

// Approve all recurring bookings in a series
function approveAllRecurring(recurringGroup) {
  showPopup(
    "Masukkan nama Anda untuk menyetujui semua booking pending dalam seri ini:",
    "success",
    "Setujui Semua Seri"
  );
  
  const popup = document.querySelector('.popup-modal');
  const buttonContainer = popup.querySelector('.popup-button').parentElement;
  buttonContainer.innerHTML = `
    <div style="margin-bottom: 20px;">
      <input type="text" id="approverNameSeries" placeholder="Nama lengkap..." 
             style="width: 100%; padding: 10px; border: 2px solid #ddd; border-radius: 8px; font-size: 1em;" />
    </div>
    <div style="display: flex; gap: 10px; justify-content: center;">
      <button class="popup-button" onclick="confirmApprovalSeries(${recurringGroup})">
        ✓ Setujui Semua
      </button>
      <button class="popup-button error" onclick="closePopup()">
        Batal
      </button>
    </div>
  `;
  
  setTimeout(() => {
    document.getElementById('approverNameSeries').focus();
  }, 100);
}

// Confirm approval for all recurring bookings
function confirmApprovalSeries(recurringGroup) {
  const approverName = document.getElementById('approverNameSeries').value.trim();
  
  if (!approverName) {
    showPopup("Nama tidak boleh kosong!", "error", "Input Tidak Valid");
    return;
  }
  
  const pendingBookings = bookings.filter(b => 
    b.recurringGroup === recurringGroup && b.approvalStatus === "pending"
  );
  
  pendingBookings.forEach(booking => {
    booking.approvalStatus = "approved";
    booking.approvedBy = approverName;
    booking.approvedAt = new Date().toISOString();
  });
  
  renderBookings();
  closePopup();
  showPopup(`${pendingBookings.length} reservasi berhasil disetujui oleh ${approverName}!`, "success", "Seri Disetujui!");
}

// Delete all recurring bookings in a series
function deleteAllRecurring(recurringGroup) {
  const recurringBookings = bookings.filter(b => b.recurringGroup === recurringGroup);
  
  showPopup(
    `Apakah Anda yakin ingin menghapus semua ${recurringBookings.length} reservasi dalam seri ini?`,
    "error",
    "Hapus Semua Seri"
  );
  
  const popup = document.querySelector('.popup-modal');
  const buttonContainer = popup.querySelector('.popup-button').parentElement;
  buttonContainer.innerHTML = `
    <div style="display: flex; gap: 10px; justify-content: center;">
      <button class="popup-button error" onclick="confirmDeleteSeries(${recurringGroup})">
        Ya, Hapus Semua
      </button>
      <button class="popup-button" onclick="closePopup()">
        Batal
      </button>
    </div>
  `;
}

// Confirm deletion of all recurring bookings
function confirmDeleteSeries(recurringGroup) {
  const recurringBookings = bookings.filter(b => b.recurringGroup === recurringGroup);
  const count = recurringBookings.length;
  
  bookings = bookings.filter(b => b.recurringGroup !== recurringGroup);
  
  renderBookings();
  updateStats();
  closePopup();
  showPopup(`${count} reservasi berulang berhasil dihapus!`, "success", "Seri Dihapus!");
}

function confirmDelete(id) {
  bookings = bookings.filter((b) => b.id !== id);
  renderBookings();
  updateStats();
  closePopup();
  showPopup("Reservasi berhasil dihapus!", "success", "Dihapus!");
}

function updateStats() {
  const total = bookings.length;
  const today = new Date().toDateString();
  const todayCount = bookings.filter((b) => {
    const bookingDate = new Date(b.tanggalMulai).toDateString();
    return bookingDate === today;
  }).length;

  totalBookingsEl.textContent = total;
  todayBookingsEl.textContent = todayCount;
}

// Popup functions
function showPopup(message, type = 'success', title = null) {
  // Remove existing popup if any
  const existingPopup = document.querySelector('.popup-overlay');
  if (existingPopup) {
    existingPopup.remove();
  }

  // Set default titles
  if (!title) {
    title = type === 'success' ? 'Berhasil!' : 'Oops!';
  }

  // Create popup elements
  const overlay = document.createElement('div');
  overlay.className = 'popup-overlay';
  overlay.innerHTML = `
    <div class="popup-modal">
      <button class="popup-close" onclick="closePopup()">&times;</button>
      <div class="popup-icon ${type}">
        ${type === 'success' ? '✅' : '❌'}
      </div>
      <div class="popup-title">${title}</div>
      <div class="popup-message">${message}</div>
      <button class="popup-button ${type}" onclick="closePopup()">
        ${type === 'success' ? 'OK' : 'Tutup'}
      </button>
    </div>
  `;

  // Add to document
  document.body.appendChild(overlay);

  // Show popup with animation
  setTimeout(() => {
    overlay.classList.add('show');
  }, 10);

  // Auto close after 5 seconds for success messages
  if (type === 'success') {
    setTimeout(() => {
      closePopup();
    }, 5000);
  }

  // Close on overlay click
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closePopup();
    }
  });

  // Close on escape key
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      closePopup();
      document.removeEventListener('keydown', handleEscape);
    }
  };
  document.addEventListener('keydown', handleEscape);
}

function closePopup() {
  const popup = document.querySelector('.popup-overlay');
  if (popup) {
    popup.classList.remove('show');
    setTimeout(() => {
      popup.remove();
    }, 300);
  }
}

function showAlert(message, type) {
  // Use popup instead of inline alert
  showPopup(message, type);
  
  // Keep the old alert system as fallback (hidden by default)
  alertContainer.innerHTML = `
    <div class="alert alert-${type}" style="display: none;">
      ${message}
    </div>
  `;
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  // Initialize dynamic content if not already done
  if (!document.querySelector(".room-card")) {
    initializeDynamicContent();
  }
  
  renderBookings();
  updateStats();
});